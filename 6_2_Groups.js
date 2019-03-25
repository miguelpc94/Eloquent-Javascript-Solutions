/*
Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.
Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.
*/

class Group {
    constructor() {
        this.group=new Array();
    }
    add(element) {
        if (this.group.indexOf(element)==-1) {
            this.group.push(element);
            return true;
        }
        return false;
    }
    delete(element) {
        let index=this.group.indexOf(element);
        if (index==-1) return false;
        this.group.splice(index,1);
        return true;
    }
    has(element) {
        if (this.group.indexOf(element)==-1) {
            return false;
        } else {
            return true;
        }
    }
    static from(listOfElements) {
        let newGroup = new Group();
        for (let element of listOfElements) {
            newGroup.add(element);
        }
        return newGroup;
    }
}

listOfElements = [1,2,"text"];

let testGroup = Group.from(listOfElements);

console.log("Has 1? "+testGroup.has(1));
console.log("Has 2? "+testGroup.has(2));
console.log("Has 3? "+testGroup.has(3));
console.log('Has "text"? '+testGroup.has("text"));
console.log('Has "test"? '+testGroup.has("test"));