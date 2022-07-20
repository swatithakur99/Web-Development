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

// let obj2 = obj;
// obj2.name = "abcd"
// console.log(obj);
// console.log(obj2); // again both will share the same address

// let obj2 = {...obj}
// obj2.name = "abcd";
// obj2.add.country="europe"
// console.log(obj);
// console.log(obj2);

// let obj2 = {...obj,add:{...obj.add,state:{...obj.state}}}
// obj2.name = "abcd";

// let obj2 = {...obj,add:{...obj.add,state:{...obj.add.state}}};
// obj2.add.state.code = 10;

// console.log(obj);
// console.log(obj2);
