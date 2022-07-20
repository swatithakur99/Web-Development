Array.prototype.myMap = function(callback){
let res = [];
for(let i=0;i<this.length;i++){
    let val = this[i];
     let rv = callback(val,i,this);
     res.push(rv);
}
return res;
}


// Q1.
// let arr1 = ["Sumeet Malik","Amit Malik","Inderjit Malik","Daya Malik", "Kunal Malik","Arayn Malik"];
// let ans = arr1.myMap(function(v,i,arr){
//   let nameParts = v.split(" ");
//   let s2 = nameParts[0];
//   let s3 = nameParts[1]; 
//   return s2[0]+"."+s3[0]+".";
// }) 
// console.log(ans);

// Q2.
// let arr = [
//     {
//         gender: 'M',
//         age: 24
//     },
//     {
//         gender: 'F',
//         age: 34
//     },
//     {
//         gender: 'F',
//         age: 28
//     },
//     {
//         gender: 'M',
//         age: 74
//     },
//     {
//         gender: 'F',
//         age: 31
//     },
//     {
//         gender: 'M',
//         age: 47
//     },
//     {
//         gender: 'F',
//         age: 26
//     },
//     {
//         gender: 'M',
//         age: 47
//     },
//     {
//         gender: 'F',
//         age: 47
//     },
//     {
//         gender: 'F',
//         age: 19
//     },
//     {
//         gender: 'M',
//         age: 20
//     }
// ];

// let ans  =  arr.myMap(function(v,i,arr){
//     if(v.gender == 'F' && v.age >=20 && v.age<=30){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(ans);
