Array.prototype.myEvery = function(cb){
  let oarr = this;
  for(let i=0;i<oarr.length;i++){
     let val = oarr[i];
     let rv = cb(val, i ,oarr);
     if(rv ==  false){
         return false;
     }
  }
  return true;
}




let arr = [
    {name: "A", age: 14, gender:"M"},
    {name: "B", age: 34, gender:"M"},
    {name: "C", age: 24, gender:"F"},
    {name: "D", age: 25, gender:"F"},
    {name: "E", age: 44, gender:"M"},
    {name: "F", age: 28, gender:"F"},
    {name: "G", age: 36, gender:"M"},
    {name: "H", age: 27, gender:"F"},
];

let allFemale = arr.filter(v => v.gender == 'F').myEvery(v =>v.age>=20 && v.age<=30 );
console.log(allFemale);