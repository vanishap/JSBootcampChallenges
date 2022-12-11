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
max(10,8,6);
max(20,40,10);
max(3,6,9);

function addUnknown(n1,n2,n3,n4,n5) {
  if(n1,n2){
    return n1+ n2;
  }else if (n1,n2,n3){
    return n1+ n2+n3;
  }else if (n1,n2,n3,n4,n5){
    return n1+n2+n3+n4+n5;
  }
}
addUnknown(2,2);
addUnknown(3,4,5);
addUnknown(10,10,10,10,100);


function evenOrOdd(num) {
   return num %2 ===0 ? 'even' :'odd'; 
}
evenOrOdd(6);
evenOrOdd(7);

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
    return 'All conditions are false.';
  }
}
operator(5,5,10);
operator(8,2,6);
operator(24,8,3);
operator(124,2345,1)


module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
