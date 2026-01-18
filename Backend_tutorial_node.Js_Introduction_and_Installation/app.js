// const { createServer } = require('node:http');

// const hostname = "127.0.0.1"
// const port = "3000"

// const server = createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader("content-Type", "text/html");
//   res.end("<h1>Hello World</h1>");
// });

// server.listen(port, hostname, () => {
//   console.log(`server in running: http://${hostname}:${port}/`);

// });

const { createServer } = require("http");

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/html");
  res.end("<h1>Hello</h1>")
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server on running: http://127.0.0.1:3000/");
});
