const fs = require("fs");
let txt= fs.readFileSync("file1.txt","utf-8"); // utf-8 is compulsory
txt = txt.replace("created","maded");

console.log("The content of the file1 is :-");
console.log(txt);

console.log("Creating a new file...");
fs.writeFileSync("copyfile1.txt",txt);