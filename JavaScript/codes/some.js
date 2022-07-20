Array.prototype.mySome = function(cb){
  let oarr = this;
  for(let i=0;i<oarr.length;i++){
      let val = oarr[i];
      let rv = cb(val,i,oarr);
      if(rv ==  true){
          return true;
      }
  }
  return false;
}





let arr = [
        {name: "A", age: 14, gender:"M"},
        {name: "B", age: 34, gender:"M"},
        {name: "C", age: 24, gender:"F"},
        {name: "D", age: 44, gender:"F"},
        {name: "E", age: 44, gender:"M"},
        {name: "F", age: 28, gender:"F"},
        {name: "G", age: 36, gender:"M"},
        {name: "H", age: 47, gender:"F"},
    ];
    let ans  = arr.mySome(function(v){
        if(v.gender == "F" && v.age>=20 && v.age <= 30){
            return true;
        }else{
            return false;
        }
    });
    console.log(ans);