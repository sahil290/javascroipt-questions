/* Q Write a javascript program to remove dupliate items from array 
(ignore case sensitivity)
*/

const removeDuplicates = (nums) => {
  
  
    return nums.filter((value, index) => nums.indexOf(value) === index);
    
    
  }
  
  
  console.log(removeDuplicates([1, 2, 3, 4, 6, 1, 3]));

  
  console.log(removeDuplicates([1, 4, 7, 0]));