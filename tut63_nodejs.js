console.log("Hello, Node JS");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');  // -'text/plain' by default - so replace plain to html
  //res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more designing </title>
      <style>
          .contain{
              border: 3px solid blue;
              background-color: rgb(20, 146, 87);
              padding: 30px;
              margin: 43px auto;
              width: 444px;
          }
  
          a{
              text-decoration: none;
              color: rgb(255, 0, 43);
          }
  
          a:hover{
              color:aliceblue;
              background-color: aqua;
          }
          a:visited{
              background-color: blue;
          }
          a:active{
              background-color: brown;
          }
  
          .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: crimson;
              padding:6px;
              border: none;
              cursor:pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color:darkgoldenrod;
              background-color:rgb(223, 245, 201);
              border: 2px solid black; 
          }
  
      </style>
  </head>
  <body>
     <div class="contain" id="cont1">
         <h1>This is new styles</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus officiis expedita praesentium enim repellendus sed molestiae pariatur cum voluptate.
         </p>
         <a href="https://google.com" class="btn">Read more</a>
         <button class="btn">Contact Us</button>
     </div> 
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); //  To stop the server press 'f1' and type Stop Code Run
});