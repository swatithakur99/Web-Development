let obj = {
    name : "Swati",
    add : {
        country: "India",
        state:{
            code:"DL",
            pin:"110041"
        }
    }
}
// this is how we can find the values in nested object
let {name} = obj;
console.log(name);

let {add:{country: abcd}} = obj;
console.log(abcd);

let {add:{state:{code:cd}}} = obj;
console.log(cd);