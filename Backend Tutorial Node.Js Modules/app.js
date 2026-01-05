const { createServer } = require("http");
const fs = require("fs");

const port = 3000;
const hostname = "127.0.0.1";

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/html");
    res.end("<h1>hyee</h1>");
});

server.listen(port, hostname, () => {
    console.log(`server on running: http://${hostname}:${port}/`);
});

const text = fs.readFileSync("index.html", "utf-8");
console.log(text);

fs.writeFileSync("test.txt", "Hello Node.js");
const text1 = fs.readFileSync("test.txt", "utf-8");
console.log(text1);


