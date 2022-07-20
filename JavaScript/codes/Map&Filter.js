// Q1.
// let products=[
//     {name: "T-Shirt", price:25},
//     {name: "Headphones", price:125},
//     {name: "Keyboard", price:75},
//     {name: "Monitor", price:200},
// ];
// let nameList = products.filter(v => v.price>=100).map(v => v.name.toUpperCase())
// console.log(nameList);
// let lists = products.map(function(v){
//        if(v.price>=100){
//            return v.name.toUpperCase();
//        }else{
//            return v.name.toLowerCase();
//        }
// });
// console.log(lists);

// Q2.
let arr = [5,83,24,67,71,12,24,7];
let cubes = arr.filter(v => v*v <=1000).map(v => v*v*v);
console.log(cubes);

let cube = arr.map(v => v*v*v).filter(v => v<=10000);
console.log(cube);