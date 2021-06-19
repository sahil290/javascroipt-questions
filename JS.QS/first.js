/*
 Write a JavaScript function to get the first ‘n’ elements of an array. Passing a parameter ‘n’ will return the first ‘n’ elements of the array. 
File name suggestion: first.js
Test Data :
console.log(first([7, 9, 0, -2])); // 7
console.log(first([],3)); // []
console.log(first([7, 9, 0, -2],3)); // [7, 9, 0]
console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); // [] (edited) 
*/
const first =  (array, num) => {
  
    if (array == null) 
      
    return 0;

  if (num == null) 
    
    return array[0];

  if (num < 0)

    return [];

  return array.slice(0, num);

};
console.log(first([7, 9, 0, -2]));

console.log(first([],3));

console.log(first([7, 9, 0, -2],3));

console.log(first([7, 9, 0, -2],6));

console.log(first([7, 9, 0, -2],-3));