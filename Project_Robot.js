/*
    Build an automaton, a little program that performs a task 
    in a virtual world. Our automaton will be a mail-delivery 
    robot picking up and dropping off parcels.
*/

// All the village roads
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

// Turn the road strings into a graph object
function buildGraph(edges) {
    let graph = Object.create(null);
    // Add a new edge to the graph
    function addEdge(from, to) {
        if (graph[from]==null) {
            graph[from]=[to];
        } else {
            graph[from].push(to);
        }
    }
    // Split each road string into two places and update the edges of the graph
    for (let [from,to] of edges.map(r => r.split('-'))) {
        addEdge(from, to);
        addEdge(to,from);
    }
    return graph;
}

// Build a graph from the road strings
const roadGraph = buildGraph(roads);

// This class hold the state of the village, which contain the 
// position of the robot and the undelivered parcels
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    // Return a new VillageState if the robot's destination is 
    // valid or the same if not
    move(destination) {
        // Return the same state if destination is invalid
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            // If the parcels are in the same place as the robot, they move with it
            // to the destination. If the parcels are in the place they should be 
            // delivered, they are left behing as the robot move to the new destination
            let parcels = this.parcels.map(p => {
                if (p.place!=this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place!= p.address);
            return new VillageState(destination, parcels);
        }
    }
}

// Run the robot until it delivers all the parcels
function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length===0) {
            console.log(`Took ${turn} to deliver all parcels`);
            break;
        }
        let action = robot(state, memory); // The robot takes as input the actual state and memory
                                           // and return the new state and memory 
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`)
    }
}

// Return a randomly picked element from the array
function randomPick(array) {
    let choice = Math.floor(Math.random()*array.length);
    return array[choice];
}

// A dumb robot that randomly walks throught the possible destinations 
// considering where it is now
function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

// Generate a VillageState with a randomly generated number of parcels
VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];
// A robot that always follows the mail route
function routeRobot(state, memory) {
    if (memory.length===0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)}
}

let randomVillage = VillageState.random();

console.log(randomVillage);

runRobot(randomVillage,routeRobot,[]);