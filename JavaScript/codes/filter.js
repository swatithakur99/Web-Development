// // basics
// let arr = [2,5,8,15,11,9,6,20];
// let ans = arr.filter(function(v,i,arr){
//   if(v%2 == 1){
//       return true;
//   }else{
//       return false;
//   }
// });
// console.log(ans)
// Q1.
// let arr = [
//     {name: "A", age: 14, gender:"M"},
//     {name: "B", age: 34, gender:"M"},
//     {name: "C", age: 24, gender:"F"},
//     {name: "D", age: 44, gender:"F"},
//     {name: "E", age: 44, gender:"M"},
//     {name: "F", age: 28, gender:"F"},
//     {name: "G", age: 36, gender:"M"},
//     {name: "H", age: 47, gender:"F"},
// ];
// let ans  = arr.filter(function(v,i,arr){
//     if(v.gender == "F"){
//         return true;
//     }else{
//         return false;
//     }
// });
// // console.log(ans);
// let ans1 = ans.map(function(v,i,ans){
//  return v.age;
// });
// console.log(ans1);
// or
// let ans  = arr.filter(function(v,i,arr){
//     if(v.gender == "F"){
//         return true;
//     }else{
//         return false;
//     }
// }).map(function(v,i,arr){
//  return v.age;
// });
// console.log(ans);