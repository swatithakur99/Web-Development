let path = require("path");
let fs = require("fs");
let fileNameArray  = process.argv.slice(2);
let  fileName = fileNameArray[0];
let content = fileNameArray[1];

let currentPath = process.cwd();
console.log("currentPAth",currentPath);
 let joinedPath = path.join(currentPath,"Dir",fileName);
 console.log(joinedPath);
 fs.writeFileSync(joinedPath,content);
