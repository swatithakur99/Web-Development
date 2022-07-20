// // Array.prototype.myReduce = function(cb, iv){
//     let oarr = this;
//     let pv;
//     if(iv == undefined){
//         pv = oarr[0];
//         for(let i =1;i<oarr.length;i++){
//             let cv = oarr[i];
//             pv =  cb(pv,cv,i,oarr);
//         }
//     }else{
//         pv = iv;
//         for(let i =0;i<oarr.length;i++){
//             let 
//             cv = oarr[i];
//             pv =  cb(pv,cv,i,oarr);
//     }
// }
//     return pv;
// }
// let arr = [10,20,30,40,50];
//  let sum1  = arr.myReduce(function(pv,cv,ci,oarr){
//     console.log(pv +"-"+ cv + "-"+ ci);
//     return pv+cv;
//  })
//  console.log(sum1);
//  let sum2  = arr.myReduce(function(pv,cv,ci,oarr){
//     console.log(pv +"-"+ cv + "-"+ ci);
//     return pv+cv;
//  },5);
//  console.log(sum2);
// // //  Q1.
// let arr = [51,23,37,44,73,82,97,45];
// let ans  = arr.reduce(function(pv,cv,ci,oarr){
//      if(isPrime(pv) == true){
//          return pv+1;
//      }else{
//          return pv;
//      }
// },0);
// console.log(ans);
// function isPrime(val){
//  for(let i=2 ;i*i<=val;i++){
//      if(val%i == 0){
//          return false;
//      }
//  }
//  return true;
// }
// // Q2.
// let arr1 = [[2,8,10],[15, 20],[45,64,79,25,28],[],[25 ,64, 73],[10]];
// let ans1 = arr1.reduce(function(pv,cv,ci,oarr){
//     return pv.concat(cv);
// });
// console.log(ans1);
// // Q3. compound
// function f(x){
//     return x*x;
// }
// function g(x){
//     return x +10;
// }
// function h(x){
//     return 2*x;
// }
// let farr = [f,g,h];
// let x = 10;
// let ans2 = farr.reverse().reduce(function(pv,cv){
// return cv(pv)
// },x);
// console.log(ans2);
// Q4. intersection
// let arr2d = [ [10,50,70,80,90,100,30,60],
//               [11,50,75,85,90,100,34,60],
//               [10,51,70,80,90,100,30,60],
//               [11,50,75,85,92,100,34,60],
//               [10,50,70,80,90,100,30,60],
// ];

// let ans = arr2d.reduce(function(pv,cv){
//     let arr = pv.filter(v => cv.includes(v));
//     return arr;

// });
// console.log(ans);

// Q5. union of Array
// let pv = 0;
// let arr2d = [ [10,50,70,80,90,100,30,60],
//               [11,50,75,85,90,100,34,60],
//               [10,51,70,80,90,100,30,60],
//               [11,50,75,85,92,100,34,60],
//               [10,50,70,80,90,100,30,60],
// ];
// let ans  =  arr2d.reduce(function(pv,cv){
//  let arr = cv.filter(v => pv.includes(v)  == false);

//  let union = pv.concat(arr);
//    return union;
// });
// console.log(ans);

//Q5. sort and reverse
// let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
// let arr = [20, 54, 12, 33, 98, 76, 100, 11, 291, 34];
// let ans = sarr.sort().reverse();
// let ans1 = arr.sort((a,b)=> a-b).reverse();
// console.log(ans);
// console.log(ans1);
// let str = "My name is Sumeet Malik. I am a software developer. I believe in learning by doing. I need courage and patience.";
// let strArr = str.split(".");
// let res = strArr.filter(v => v.length>0);
// // console.log(strArr);
// let reverseArr = res.reduce(function(pv,cv){
//    let spArr = cv.split(" ");
// //    console.log(spArr);
//    let rev = spArr.reverse();
// //    console.log(rev);
//    let ans = rev.join(" ");
// //    console.log(ans);
//    return pv+ans+".";
// },"")
// // let res = reverseArr.join(".");
// console.log(reverseArr);
let str = "My name is Sumeet Malik. I am a software developer. I believe in learning by doing. I need courage and patience.";

// "Malik Sumeet is name My. developer software a am I. doing by learning in believe I. patience and courage need I.";

// without for loops you have to do it.

let res1 = str.split(".");
console.log(res1);

let res2 = res1.filter(s => s.length > 0);
console.log(res2);

let res3 = res2.map(s => s.trim());
console.log(res3);

let res4 = res3.map(s => s.split(" "));
console.log(res4);

res4.map(a => a.reverse()); // it is more relevant to use foreach
console.log(res4);

let res5 = res4.map(a => a.join(" "));
console.log(res5);

let res6 = res5.map(s => s + ".");
console.log(res6);

let res7 = res6.reduce(function(pv, cv){
    return pv + " " + cv;
})

console.log(res7);

// let res = str.split(".").filter(s => s.length > 0).map(s => s.trim().split(" ").reverse().join(" ") + ".").reduce(function(pv, cv){
//     return pv + " " + cv;
// });

// console.log(res);


