for (let counter=1; counter<=100; counter++) {
	result="";
	if (!(counter%3)) result+="Fizz";
	if (!(counter%5)) result+="Buzz";
	if (!result.length) result=String(counter);
	console.log(result);
}