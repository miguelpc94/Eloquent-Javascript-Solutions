/*
Can you think of a way to call hasOwnProperty on an object that has its own
property by that name?
*/

let testObject = {
	f1: function() {
		console.log("This is function f1");
	},
	f2: function() {
		console.log("This is function f2");
	}
}

testObject.f1();
testObject.f2();

console.log("\nHas 'f1'? "+testObject.hasOwnProperty('f1'));
console.log("Has 'f2'? "+testObject.hasOwnProperty('f2'));
console.log("Has 'f3'? "+testObject.hasOwnProperty('f3'));
console.log("Has 'hasOwnProperty'? "+testObject.hasOwnProperty('hasOwnProperty'));

console.log("\nAdding 'hasOwnProperty' to the object...");

testObject.hasOwnProperty = function() {
	console.log("\nYou probably called the wrong function...\n");
};

console.log("Has 'hasOwnProperty'? "+testObject.hasOwnProperty('hasOwnProperty'));
console.log("Has 'hasOwnProperty'? "+Object.hasOwnProperty.call(testObject,'hasOwnProperty'));