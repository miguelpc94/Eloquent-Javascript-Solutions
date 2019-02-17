let testArray1=[4,2,5,6,9];
let testArray2=[4,7,5,6,9];
let testArray3=[4,7,5,3,9];
let testArray4=[2,2,2,2,2];
let testArray5=[8,22,27,70,4];

function everything(valueArray, evaluation) {
    negativeEvaluation=(elem)=>!evaluation(elem);
    negativeEvaluationValue=valueArray.some(negativeEvaluation);
    return !negativeEvaluationValue;
}

console.log('\nThe "some" version:');
console.log(everything(testArray1, (elem)=>elem>3));
console.log(everything(testArray2, (elem)=>elem>3));
console.log(everything(testArray3, (elem)=>elem>3));
console.log(everything(testArray4, (elem)=>elem>3));
console.log(everything(testArray5, (elem)=>elem>3));

function everything(valueArray, evaluation) {
    for (elem of valueArray) {
        if (!evaluation(elem)) return false;
    }
    return true;
}

console.log('\nThe "loop" version:');
console.log(everything(testArray1, (elem)=>elem>3));
console.log(everything(testArray2, (elem)=>elem>3));
console.log(everything(testArray3, (elem)=>elem>3));
console.log(everything(testArray4, (elem)=>elem>3));
console.log(everything(testArray5, (elem)=>elem>3));