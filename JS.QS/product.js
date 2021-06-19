/*
write a program to find the product of the given array.
*/


const product = (Array) => Array.reduce((total, current) => total * current , 1);

console.log(product([1,2,3,4]));
console.log(product([1,4,7,0]));