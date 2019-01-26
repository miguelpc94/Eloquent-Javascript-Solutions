function reverseArray(array1=[]) {
	let array2=[];
	for (let index=0; index<array1.length; index++) {	array2[(array1.length-1)-index]=array1[index];
	}
	return array2;
}

function reverseArrayInPlace(array1=[]) {
	let array2=[];
	for (let index=0; index<array1.length; index++) {
		array2[(array1.length-1)-index] = array1[index];
	}
	for (let index=0; index<array1.length; index++) {	
		array1[index]=array2[index];
	}
}


testArray1=[1,'b',3,'4'];
testArray2=[1,'b',3,'4',6,7];

testArray1=reverseArray(testArray1);
reverseArrayInPlace(testArray2);

console.log(testArray1)
console.log(testArray2)