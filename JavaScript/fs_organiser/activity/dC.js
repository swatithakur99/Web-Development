let path = require("path");
let fs = require("fs");

let inputArr = process.argv.slice(2);
let mainDir = inputArr[0];
let currentPAth = process.cwd();
let mainDirPath = path.join(currentPAth,mainDir);
let isMainModulePresent = fs.existsSync(mainDirPath);
if(isMainModulePresent){
    console.log("Directory is already created");
    return;
}else{
    console.log("web path created",mainDirPath);
    fs.mkdirSync(mainDirPath);
    let toipcFromInput = inputArr.slice(1,4);
    for(let i =0;i<toipcFromInput.length;i++){
         let ctopicPath = path.join(mainDirPath,toipcFromInput[i]);
         console.log(ctopicPath);
         fs.mkdirSync(ctopicPath);
         for(let j =1 ;j<=5;j++){
             let modulePath = path.join(ctopicPath,"Module"+j);
             fs.mkdirSync(modulePath);
             let filePath = path.join(modulePath,"content.md");
             fs.writeFileSync(filePath,"Hello Everyone");
         }
    }
}

