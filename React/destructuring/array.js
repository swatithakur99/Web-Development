let arr = ["HI","I","AM","Swati"];
// normal way to get the data by using index
// let a = arr[0];
// let b = arr[1];
// console.log(a,b);

//to find all the values we can use destructuring method to minimize the line of code
// destructuring -> it is basically a way or property to extract the data of arr, obj or map conveniently.
// let [a,b,c,d] = arr;
// console.log(a,b,c,d); // all values of arr are assign to a b c d

// let [a,b,,d] = arr; // to skip the value, we just neet to provide an extra comma for that value
// console.log(a,b,d);

// to provid extra value we can set that value by using destructuring
let[a,b,c,d,extra = "How Are Yor?"] = arr;
console.log(a,b,c,d,extra);