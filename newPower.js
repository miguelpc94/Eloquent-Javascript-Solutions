function power(base, exponent=2, printResult) {
	let result=1;
	for (let count=0; count<exponent; count++) {
		result*=base;
	}
	if (printResult===true) {
		console.log('The result is '+result);
	}
	return result;
}

console.log(power(2));
console.log(power(2,0));
console.log(power(3,3));
power(3,3,true)

