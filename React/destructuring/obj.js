let obj = {
    name : "Swati",
    state: "Delhi",
    country : "India"
}
// it's the normal method to find the values 
// let name = obj.name;
// let state = obj["state"];
// console.log(name,state);

// by using destructuring. we can write the code more conveniently
// let {name,state,country} = obj;
// console.log(name,state,country);

// to give extra value 
// let {name,state,country,extra = "default value"} = obj;
// console.log(name,state,country,extra);

// to change the name of key in obj. we can also write this code as....
let {name : firstName,state,country,extra = "default value"} = obj;
console.log(firstName,state,country,extra); // here we can write firstName instead of name