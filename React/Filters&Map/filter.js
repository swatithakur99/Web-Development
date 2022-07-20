let arr = ["Apple", "Banana","Orange","Watermelon"];
// lets find which fruit has length greaternthan 6

// by using normal method
let harr = [];
// for(let  i = 0;i<arr.length;i++){
//     let fruit = arr[i];
//     if(fruit.length>6){
//        harr.push(fruit);
//     }
// }
// console.log(harr);

// by using filter function
harr = arr.filter(function(val,idx){ // filter function filter the array and give the ans in true and false.
    return val.length>6;
})
console.log(harr);