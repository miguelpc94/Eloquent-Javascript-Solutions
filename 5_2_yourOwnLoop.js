function loop(startValue, testFunction, bodyFunction, updateFunction) {
    let workVar=startValue;
    while (testFunction(workVar)) {
        bodyFunction(workVar);
        workVar=updateFunction(workVar);
    }
}

let start=0;
let test=(num)=>num<=100;
let update=(num)=>num+1;
let body=function(num) {
    let result="";
	if (!(num%3)) result+="Fizz";
	if (!(num%5)) result+="Buzz";
	if (!result.length) result=String(num);
	console.log(result);
};

loop(
    start,
    test,
    body,
    update
);