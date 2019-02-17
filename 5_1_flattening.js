let testArray=[
    [1, 2, 3],
    ['a','b', 'c'],
    [4,'d',5],
    ['e',6,'f']
];

console.log(
    testArray.reduce((flatten,elem)=>{
        flatten=flatten.concat(elem);
        return flatten;
}));