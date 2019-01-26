const isEven = function(number) {
	if (number===0) {
		return true;
	} else if (number===1) {
		return false;
	} else {
		if (number>0) {
		 return isEven(number-2);
		} else {
			return isEven(number+2);
		}
	}
};

console.log(isEven(6));
console.log(isEven(7));
console.log(isEven(33));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));
console.log(isEven(-1));
console.log(isEven(-56));
console.log(isEven(-75));