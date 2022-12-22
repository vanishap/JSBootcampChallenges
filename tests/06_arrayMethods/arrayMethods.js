function doubler(arr) {
  return arr.map(n => n * 2);
}

function mapCap(arr) {
  return arr.map(word=>word.toUpperCase());
}

function canRideTheRide(arr) {
  // let str ='';
  // const newArr = []
  // for(let i =0; i<arr.length; i++){
  //   if(arr[i].age >=17){
  //     str = `${arr[i].name} can ride the ride`;
  //     newArr.push(str);
  //   }else {
  //     str = `Sorry, ${arr[i].name} cannot ride the ride`
  //     newArr.push(str);
  //   }
  // }
  // return newArr;  
  arr.filter((item)=>{
    if(item.age>=17){
    return `${item.name} can ride the ride`
  }
  })
}

function indAndVal(arr) {
  return arr.map((ele, index)=>{
    return {index: index, value: ele}
  })
}

function filterEvens(arr) {
  return arr.filter(n => n%2===0)
}

function gmailSearch(arr) {
  return arr.filter(item=>item.includes('@gmail.com'));
}

function getCart(arr) {
  const value = arr.reduce((acc,ini)=>{
    if(ini.price < 100){
      acc += ini.price
    }
    return acc;
  },0)
  return value;
}

function findGreater(arr) {
  return arr.find(e => e.price>100)
}

module.exports = {
  doubler,
  mapCap,
  canRideTheRide,
  indAndVal,
  filterEvens,
  gmailSearch,
  getCart,
  findGreater,
};
