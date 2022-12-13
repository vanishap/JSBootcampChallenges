/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if(str.includes(letter)){
    return true;
  }
  return false
}

function isPalindrome(str) {
  const str1 = str.split('').reverse().join('');
  if (str===str1){
    return true
  }
  return false
}

function cap(str, letter) {
  if(str.includes(letter)){
    const newStr= str.indexOf(letter)+1;
    return str.charAt(newStr).toUpperCase();
  }
  return 'sorry not found';
}


function firstCharacter(str1, str2) {
  if(str1[0]===str2[0]){
    return true;
  }
  else if(str1[0]=== str2[0].toLowerCase()){
    return true
  }
  return false;
}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
