function arrayToList(valueArray) {
	let list={};
	let listObj=list;
	let parentObj={};
	for (let index=0; index<valueArray.length; index++, listObj=listObj.rest) {
		listObj.value=valueArray[index];
		parentObj=listObj;
		listObj.rest={};
	}
	parentObj.rest=null;
	return list;
}

function listToArray(valueList) {
	let listObj=valueList;
	let outputArray=[];
	while (listObj.rest!==null) {
		outputArray.push(listObj.value);
		listObj=listObj.rest;
	}
	outputArray.push(listObj.value);
	return outputArray;
}

function prepend(element,valueList) {
	return {
		value: element,
		rest: valueList
	};
}

function nth(position, valueList) {
	if (position==0) return(valueList.value);
	else return nth(position-1,valueList.rest);
}

newList=arrayToList([1,2,3]);
newList=prepend('a',newList);
newList=prepend('c',newList);
recoveredArray=listToArray(newList);
console.log(newList);
console.log(recoveredArray);
console.log(nth(1,newList));
console.log(nth(4,newList));

