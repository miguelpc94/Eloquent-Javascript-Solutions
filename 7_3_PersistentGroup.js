/*
Write a new class PGroup, similar to the Group class from Chapter 6, which
stores a set of values. Like Group, it has add, delete, and has methods.
Its add method, however, should return a new PGroup instance with the given
member added and leave the old one unchanged. Similarly, delete creates a
new instance without a given member.
The class should work for values of any type, not just strings. It does not
have to be efficient when used with large amounts of values.
The constructor shouldn’t be part of the class’s interface (though you’ll definitely
want to use it internally). Instead, there is an empty instance, PGroup.
empty, that can be used as a starting value.
Why do you need only one PGroup.empty value, rather than having a function
that creates a new, empty map every time?
*/

class PGroup {
    constructor() {
        this.group=new Array();
    }
    add(element) {
        let newGroup = new PGroup();
        if (newGroup.group.indexOf(element)==-1) {
            newGroup.group = this.group.concat(element)
            return newGroup;
        } 
        return this;
    }
    delete(element) {
        let newGroup = new PGroup();
        newGroup.group = this.group.filter(item => item !== element);
        return newGroup;
    }
    has(element) {
        if (this.group.indexOf(element)==-1) {
            return false;
        } else {
            return true;
        }
    }
}

PGroup.empty = new PGroup();

let test1Group = PGroup.empty;

test1Group=test1Group.add(1);
test1Group=test1Group.add(2);
test1Group=test1Group.add("text");

test2Group=test1Group.delete(2);
test2Group=test2Group.add("test");

test1Group = test1Group.add(3);

console.log("test1Group Has 1? "+test1Group.has(1));
console.log("test1Group Has 2? "+test1Group.has(2));
console.log("test1Group Has 3? "+test1Group.has(3));
console.log('test1Group Has "text"? '+test1Group.has("text"));
console.log('test1Group Has "test"? '+test1Group.has("test"));

console.log("test2Group Has 1? "+test2Group.has(1));
console.log("test2Group Has 2? "+test2Group.has(2));
console.log("test2Group Has 3? "+test2Group.has(3));
console.log('test2Group Has "text"? '+test2Group.has("text"));
console.log('test2Group Has "test"? '+test2Group.has("test"));
