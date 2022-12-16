/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  // n! = n* n-1 * n-2...
  let ans = 1;
  for(let i = 1; i <= num; i++){
    ans *= i;
  }
  return ans;
}

function stringReverse(str) {
  let newStr = ' ';
  for(let i= str.length; i>=0; i--){
    newStr += str[i]
  }
  return newStr;
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  if(startIdx === undefined && endIdx === undefined){
    return originalString;
  };
  endIdx= endIdx || originalString.length;
  let str = ''
  for(let i = startIdx; i< endIdx; i++){
    str += originalString[i];
  }
  return str;
}

function addTheEvens(num) {
  let total = 0
  for(let i=0; i<=num; i++){
    if(i % 2 ===0){
      total += i;
    }
  }
  return total;
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
