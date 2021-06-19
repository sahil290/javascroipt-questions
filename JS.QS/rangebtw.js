/*
QS.Write a JavaScript function to generate an array between two integers of ‘n’ step length. 
File name suggestion: rangeBetween.js
Test Data :
console.log(rangeBetween(4, 7, 1)); // [4, 5, 6, 7]
console.log(rangeBetween(-4, 7, 2)); // [-4, -2, 0, 2, 4, 6]
*/
const rangeBetween = (start, end) => {

    if (start > end) {
        var arr = new Array(start - end + 1);
        for (var i = 0; i < arr.length; i++, start--) {
            resarrult[i] = start;
        }
        return arr;
    } 
   else 
   {
        var arr1 = new Array(end-start+1);
     
    for (var j = 0; j < arr1.length; j++, start++) 
    {
        arr1[j] = start;
    }
          return arr1;
    }
}


console.log(rangeBetween(4, 7, 1));
console.log(rangeBetween(-4, 7));