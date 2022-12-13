/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1, num2, num3) {
  if(num1 > num2 && num1 >num3){
    return num1;
  }else if (num2 >num1 && num2 >num3){
    return num2;
  }else if(num3 >num1 && num3> num2){
    return num3;
  }
};


function addUnknown(n1=0,n2=0,n3=0,n4=0,n5=0) {
    return n1+n2+n3+n4+n5;
};

function evenOrOdd(num) {
   return num %2 ===0 ? 'even' :'odd'; 
};

function operator(num1, num2,num3) {
  if(num1+num2 === num3){
    return 'plus';
  }else if (num1- num2===num3){
    return 'minus';
  }else if(num1*num2 ===num3){
    return 'multiply';
  }else if (num1/num2===num3){
    return 'divide';
  }else {
    return null;
  }
}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
