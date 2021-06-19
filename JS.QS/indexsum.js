/*
QS. Write a javascript function to create a specified  number of elements with pre filled string value array?
*/
const indexSum = (array1, array2) => {
  
  
    var c = [];

    for (var i = 0; i < Math.max(array1.length, array2.length); i++) {
      
      c.push((array1[i] || 0) + (array2[i] || 0));
      
    }

    return c;
}
console.log(indexSum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

console.log(indexSum([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0]));