// basics
// let arr = [1,2,3,4,5,6,7];
// let sqrr = arr.map(function(v,i,arr){
// return v*v;
// });
// console.log(sqrr);

// Q1.
// let arr1 = ["Sumeet Malik","Amit Malik","Inderjit Malik","Daya Malik", "Kunal Malik","Arayn Malik"];
// let ans = arr1.map(function(v,i,arr){
//   let nameParts = v.split(" ");
//   let s2 = nameParts[0];
//   let s3 = nameParts[1]; 
//   return s2[0]+"."+s3[0]+".";
// }) 
// console.log(ans);

// Q2.
// Use the map function to produce the below output
// return an array with true and false for females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <= 30
let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
];

let ans  =  arr.map(function(v,i,arr){
    if(v.gender == 'F' && v.age >=20 && v.age<=30){
        return true;
    }else{
        return false;
    }
});
console.log(ans);
                            // or
// let shortLists = arr.map((v,i,arr) => {
//     return v.gender=='F' && v.age>=20 && v.age<=30});
// console.log(shortLists);
                            // or
// let shortLists = arr.map((v,i,arr) => v.gender=='F' && v.age>=20 && v.age<=30);
// console.log(shortLists);