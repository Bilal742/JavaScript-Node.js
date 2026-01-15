const http = require("http");
const fs = require("fs");
const fileRead = fs.readFileSync("text.html", "utf-8");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(fileRead);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening on port 80");
});