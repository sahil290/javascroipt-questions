//Write a JavaScript program to list the properties of a JavaScript object.
//File name suggestion: keys.js
//Test Data :
//console.log(keys({//
  // name : “David Rayy”,//
  // sclass : “VI”,//
  // rollno : 12//
//})); // name,sclass,rollno//

const keys = (obj) => (Object.keys(obj));


console.log(keys({
   name : "David Ray",
   sclass : "VI",
   rollno : 12
}));