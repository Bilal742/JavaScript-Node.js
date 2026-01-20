const http = require("http");
const fs = require("fs");

const readFile = fs.readFileSync("test.txt", "utf-8");

const server = http.createServer((req, res) => {
    res.writeHead(200, "content-Type", "text/html");
    res.end(`<h1>${readFile}</h1>`);
});

server.listen(3000, "127.0.0.1", () => {
    console.log(`server in running: http://127.0.0.1:3000/`);
});