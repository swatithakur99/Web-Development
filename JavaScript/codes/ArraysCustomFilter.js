Array.prototype.myFilter = function(cb){
    let oarr = this;
    let res = [];
    for(let i=0;i<oarr.length;i++){
        let v = oarr[i];
        let rv = cb(v,i,oarr);
        if(rv == true){
            res.push(v);
        }
    }
    return res;
}

let arr = [2,5,8,15,11,9,6,20];
let ans = arr.myFilter(function(v,i,arr){
  if(v%2 == 1){
      return true;
  }else{
      return false;
  }
});
console.log(ans)