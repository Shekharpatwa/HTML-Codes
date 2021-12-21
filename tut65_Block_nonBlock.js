//Synchronous or blocking
// - line by line excution

//Asynchronous or non-blocking
// - line by line is not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("file1.txt","utf-8",(err, data)=>{
    console.log(data);
});
console.log("This is non-blocking");