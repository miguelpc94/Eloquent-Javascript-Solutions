function range(start, end, step=1) {
	let rangeArray=[];
	let isEnded;
	let stepValue;
	step = Math.abs(step);
	if (end>=start) {
		isEnded = (value) => value>end;
		stepValue = (value) => step;
	}
	else {
		isEnded = (value) => value<end;
		stepValue = (value) => -step;
	}
	for (let index=0,number=start; !isEnded(number) ; number+=stepValue(),index++) {
		rangeArray[index]=number;
	}
	return rangeArray;
}

function sum(numberArray=[]) {
	let result=0;
	for(number of numberArray) {
		result+=number;
	}
	return result;
}

console.log(sum(range(0,1234567)));
