let arr = [1,2,1,3,4,5];
 // lets find the 2 times the values of arr

 // by using normal method

 let harr = [];
 for(let i = 0;i<arr.length;i++){
     harr.push(arr[i]*2);
 }
console.log(arr);
//  console.log(harr);

 // by using map function
 // map function return the value to defined array whatever done in the function
 harr = arr.map(function(val,idx){
return val*2;
 })
 console.log(harr);