/*
 Write a JavaScript function to get the last element of an array. Passing a parameter ‘n’ will return the last ‘n’ elements of the array.
File name suggestion: last.js
Test Data :
console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2],3)); // [9, 0, -2]
console.log(last([7, 9, 0, -2],6)); // [7, 9, 0, -2]
*/
const last = (array, num) => {

    if (array == null) 
      
      return 0;
    
    if (num == null) 
      
       return array[array.length - 1];
    
    return array.slice(Math.max(array.length - num, 0));  
    };
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));