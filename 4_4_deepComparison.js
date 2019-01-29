/**
* Compare two different arrays of strings 
* @param	[Array]		keys1 - Array of strings 1
* @param	[Array]		keys2 - Array of strings 2
* @return	[Boolean]	Whether the parameters are equal
*/
function compareKeys(keys1,keys2) {
	if (keys1.length!=keys2.length) return false;
	for (let key=0; key<keys1.length; key++) {
		if (keys1[key]!=keys2[key]) return false;
	}
	return true;
};

/**
* Makes a deep comparison between the content of two objects
* @param	[Object]	obj1 - Object 1
* @param	[Object]	obj2 - Object 2
* @return	[Boolean]	Whether the parameters are equal
*/
function deepEqual(obj1,obj2) {
	if (obj1===obj2) return true;
	if (obj1===null || obj2===null) return false;
	if (
		typeof(obj1)=='object' &&
		typeof(obj2)=='object'
	) {
		let keys1=Object.keys(obj1);
		let keys2=Object.keys(obj2);
		if (!compareKeys(keys1,keys2)) return false;
		for (key of keys1) {
			if (!deepEqual(obj1[key],obj2[key])) return false;
		}
		return true;
	}
	return false;
};

/*
* Set of elements to be compared using the deepEqual function
*/
let testSet={
	null1Bind: null,
	null2Bind: null,
	undefined1Bind: undefined,
	undefined2Bind: undefined,
	number1Bind: 42,
	number2Bind: 42,
	number3Bind: 11,
	number4Bind: 11,
	string1Bind: 'string1',
	string2Bind: 'string2',
	string3Bind: 'string2',
	array1Bind: ['an', 'test'],
	array2Bind: ['an', 'test'],
	array3Bind: ['The', 'test'],
	array4Bind: ['The', 'test'],
	array5Bind: ['The', 'tes'],
	array6Bind: ['The', 'test', 'test'],
	obj1Bind: {
		name: 'obj',
		value: 94
	},
	obj2Bind: {
		name: 'obj',
		value: 94
	},
	obj3Bind: {
		name: 'obj',
		value: 95
	},
	obj4Bind: {
		name: 'obj',
		value: 94,
		extra: 'plus'
	},
	obj5Bind: {
		name: 'deepObj',
		deep: {
			inside: 'NotSoDeep',
			value: 42
		}
	},
	obj6Bind: {
		name: 'deepObj',
		deep: {
			inside: 'NotSoDeep',
			value: 42
		}
	},
	obj7Bind: {
		name: 'deepObj',
		deep : {
			inside: 'Cozy',
			value: 42
		}
	}
};

/*
* Code to test the deepEqual function comparing 
* the elements of the testSet object
*/
let tests=Object.keys(testSet);
for (item of tests) {
	console.log('\nElement '+item+' is equal to:');
	for (comparison of tests) {
		if (deepEqual(
			testSet[item], 
			testSet[comparison])) {
				console.log(comparison);
		}
	}
};