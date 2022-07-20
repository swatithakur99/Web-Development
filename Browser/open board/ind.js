
// let arr = [10, 20, 30, 40, 50];
// let na1 = arr.slice(1, 4); // from 1 to 3 (4 not included)
// displayArray(na1); 

// let na2 = arr.slice(1); // from 1 to end
// displayArray(na2);

// let na3 = arr.slice(); // the entire array (can be used for cloning)
// displayArray(na3);

// let na4 = arr.slice(-3, -1); // from -3 to -2
// displayArray(na4);

// let na5 = arr.slice(-3); // from -3 to end
// displayArray(na5);

// let na6 = arr.slice(1, -2);
// displayArray(na6);

// let arr = [1,2,4,3,5,6,7,9,13];
// for(let  i =0;i<arr.length;i++){
//     let arr1 = [];
//       for(let j = i+1;j<=arr.length;j++){
//            arr1 = arr.slice(i,j);
//            displayArray(arr1);
//       }
// }

let arr = [1,2,4,3,5,6,7,9,13];
function isPrime(n){
for(let i=2;i*i <=n;i++){
  if(n%i==0){
      return false;
  }
}
return true;
}

for(let i=arr.length-1;i>=0;i--){
if(isPrime(arr[i])==true){
    arr.splice(i,1);
    // console.log(arr[i]+"true");
}
}
displayArray(arr);
function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
