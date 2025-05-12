let arrays = [[1, 2, 3], [4, 5], [6]];
const flat =  arrays.reduce((start, next) => start.concat(next), [])
console.log(flat);


