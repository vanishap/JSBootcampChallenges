/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
  for(let i in obj){
    if(i === prop){
        delete obj[i];
      }    
  }  
  return obj;
}


function numObjectProps(obj) {
  const objLength = Object.keys(obj);
  return objLength.length;
}

function shoppingCart(cartItems) {
  let totalAmt = 0;
  for(const i of cartItems){
    totalAmt += i.amount; 
  }
  return totalAmt;
}

function compareObjects(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  } 
}

module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};
