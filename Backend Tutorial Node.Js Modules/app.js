const { createServer } = require("node:http");
const fs = require("fs")

const port = 3000;
const hostname = "127.0.0.1"

const server = createServer((req, res) => {
    res.statusCode = 200,
        res.setHeader("content-Type", "text/html"),
        res.end("<h1>Hello</h1>")
});

server.listen(port, hostname, () => {
    console.log(`server in running: http://${hostname}:${port}/`);
}); 


let text = fs.readFileSync("test.txt", "utf-8");
text = text.replace("Node", "Java")
fs.writeFileSync("style.txt", text); 

 
console.log(text); 