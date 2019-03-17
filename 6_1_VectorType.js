/*
Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.
Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

class Vec {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    plus(otherVec) {
        return new Vec(this.x+otherVec.x,this.y+otherVec.y);
    }
    minus(otherVec) {
        return new Vec(this.x-otherVec.x,this.y-otherVec.y);
    }
    get magnitude() {
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    }
}

let testVec1 = new Vec(2,2);
let testVec2 = new Vec(1,0);
let testVec3 = new Vec(0,1);

console.log("\n");
console.log("testVec1: x="+testVec1.x+" y="+testVec1.y+" mag="+testVec1.magnitude);
console.log("testVec2: x="+testVec2.x+" y="+testVec2.y+" mag="+testVec2.magnitude);
console.log("testVec3: x="+testVec3.x+" y="+testVec3.y+" mag="+testVec3.magnitude);

console.log("\n");
let result = testVec1.minus(testVec2).minus(testVec3);
console.log("textVec1-testVec2-testVec3: x="+result.x+" y="+result.y+" mag="+result.magnitude);
result = testVec1.plus(testVec2).plus(testVec3);
console.log("textVec1+testVec2+testVec3: x="+result.x+" y="+result.y+" mag="+result.magnitude);
result = testVec1.minus(testVec2).minus(testVec2);
console.log("textVec1-testVec2-testVec2: x="+result.x+" y="+result.y+" mag="+result.magnitude);