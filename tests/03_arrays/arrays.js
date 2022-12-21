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
  const newArr = [];
  let str = ''
  for(let i = 0; i < arr.length; i++){
    const nArr= arr[i];
    str = `The ${nArr[1][0]} ${nArr[0]} is ${nArr[1][1]} dollars.`
    newArr.push(str);
  }
  return newArr;
}

function camelCase(str) {
//first letters of each word should be capitilized
// if first letter is capitilized, it should be converted to lowercase
// have to remove punctuations at the ending by using length-1
  const punctuation = '!@#$%^&*()<';
  const words = str.split(' ');
  const finalStr = [];
  for(let i =0; i<words.length; i++){
    if(i === 0){
      const firstWord = words[0].toLowerCase();
      finalStr.push(firstWord);
    } else {
      const remaining = words[i][0].toUpperCase()
      const remainWords= words[i].slice(1).toLowerCase();
      finalStr.push(remaining + remainWords);
    }
  }
  const final = finalStr.join('');
  if(punctuation.includes(final[final.length-1])){
    return final.slice(0, final.length-1)
  }
  return final;
}

function joiner(arr,seperator) {
  const joined = arr.join(seperator);
  return joined;
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
