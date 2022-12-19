/* eslint-disable no-unused-vars */
function multiply(arr) {
  const arrNew = arr.flat();
  let multipliedValue = 1;
  for(let i =0; i<arrNew.length; i++){
    multipliedValue *= arrNew[i];
  }
  return multipliedValue;
}

function includesCopy(arr, searchValue) {
  if(arr.includes(searchValue)){
    return true;
  }
  return false;
}

function inventory(arr) {
  if(Array.isArray(arr)){
    return arr;
  }
  const newArr = [];
  let str = ''
  for(let i = 0; i < arr.length; i++){
    str = `The ${arr[i][1][0]} ${arr[i][0]} is ${arr[i][1][1]} dollars.`
    newArr.push(str);
  }
  return newArr;
}

function camelCase(str) {
//first letters of each word should be capitilized
// if first letter is capitilized, it should be converted to lowercase
// have to remove punctuations at the ending by using length-1
  const words = str.split(' ');
  const finalStr = [];
  for(let i =0; i<words.length; i++){
    if(i === 0){
      const firstWord = words[0].toLowerCase();
      finalStr.push(firstWord);
    }
    else if (i === words.length-1){
      const lastWord = words[i][0].toUpperCase()
      const lastWordRemaining = words[i].slice(1,words.length-1).toLowerCase(); 
      const word = lastWord + lastWordRemaining
      finalStr.push(word)
    }
    else {
      const remaining = words[i][0].toUpperCase()
      const remainWords= words[i].slice(1).toLowerCase();
      finalStr.push(remaining + remainWords);
    }
  }
  return finalStr.join('');
}

function joiner(arr,seperator) {
  const joined = arr.join(seperator);
  return joined;
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
