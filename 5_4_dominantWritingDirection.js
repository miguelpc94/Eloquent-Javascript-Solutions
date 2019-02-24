let SCRIPTS=require('./scripts.js')

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to])=> {
            return code>= from && code < to;
        })) {
            return script
        }
    }
}

function countBy(items, groupName) {
    let counts=[];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known==-1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function dominantWritingDirection(text) {
    let scriptCount=countBy(text,(char)=>{
        let script=characterScript(char.codePointAt(0));
        if (script) {
            return script.name;
        } else {
            return undefined;
        }
    });
    let dominantScript = scriptCount.reduce(
        (dominantScript,evaluatedScript)=> {;
            if (evaluatedScript.name && evaluatedScript.count>dominantScript.count) {
                return evaluatedScript;
            }
            else {
                return dominantScript;
            }
        }
    ,{name: undefined, count: 0});
    let dominantScriptIndex = SCRIPTS.findIndex(s => s.name == dominantScript.name);
    return SCRIPTS[dominantScriptIndex].direction;
}

let testText="This is 123 dogޡ‎ޤޤރރ";

console.log("\nTest text:\n\n"+testText);
console.log("\nDominant writing direction: "+dominantWritingDirection(testText));