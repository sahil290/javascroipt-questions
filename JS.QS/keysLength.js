/*Write a JavaScript program to get the length of a JavaScript object. 
File name suggestion: keyLength.js
Test Data :
console.log(keyLength({
   name : “David Rayy”,
   sclass : “VI”,
   rollno : 12
})); // 3
Hint: Use object methods 
*/

const keyLength = (myobj) => {
  
    return Object.keys(myobj).length;
    
  }
  console.log(keyLength({
     name : "David Rayy",
     sclass : "VI",
     rollno : 12
  })); 