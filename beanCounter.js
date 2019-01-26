function countChar(str, char) {
	let count=0;
	for (let position=0; position<str.length; position++) {
		if (str[position]==char) {
			count++;
		}
	}
 return count;
}

let countBs = (str) => countChar(str, 'B');

console.log(countBs('ndhebBbsebjshBBjdhsB'));