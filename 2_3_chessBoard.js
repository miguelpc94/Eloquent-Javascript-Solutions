const isEven = function(number) {
	if (number%2) {
		return false;
	} else {
		return true;
	}
};

const xor = function(bool1, bool2) {
	if (bool1!=bool2) {
		return true;
	} else {
		return false;
	}
};

const generateCharacter = function(width, height) {
	if (xor(isEven(width),isEven(height))) {
	 return "#";
	} else {
	 return " ";
	}
}

const generateChessboard = function(targetWidth, targetHeight) {
	let grid="";
 for (let height=1; height<=targetHeight; height++) {
  	for (let width=1; width<=targetWidth; width++) {
		 grid+=generateCharacter(width,height);
	 }
	 grid+='\n'
 }
 return grid;
}

console.log(generateChessboard(32,16))