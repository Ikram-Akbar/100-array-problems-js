/***
 * 
 *  ---------------------------------
 *  Problem 1: Simple Concatenation
    ---------------------------------
    Write a function that takes an arbitrary number of arrays as arguments and returns a new array containing all elements from those arrays, without using any built-in methods.
 * 
 * 
*/

const concatArray = (...arg) => {
   let myArray = [];
   for(let i = 0; i<arg.length; i++){
      for(let j=0; j<arg[i].length; j++){
         myArray.push(arg[i][j]);
      }
   }
   return myArray;
};
console.log(concatArray([1,2,3],[4,5,6]));