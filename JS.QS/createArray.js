/*
Write a JavaScript function to create a specified number of elements with pre-filled string value array. 
File name suggestion: createArray.js
Test Data :
console.log(createArray(3, ‘default value’)); // [“default value”, “default value”, “default value”]
console.log(createArray(4, ‘password’)); // [“password”, “password”, “password”, “password”]
*/

const createArray = (num, val) => {
  
  
    return Array.apply(null, Array(num)).map(String.valueOf, val);
  
  
}
console.log(createArray(3, "default value"));
console.log(createArray(4, "password"));