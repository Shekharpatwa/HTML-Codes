const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync('tut61_Math_func().html');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent);
});

server.listen(8080,'127.0.0.1', ()=>{
    console.log("Listening on port 8080") //  To stop the server press 'f1' and type Stop Code Run
});