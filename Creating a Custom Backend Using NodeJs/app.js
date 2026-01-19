const { createServer } = require("http");
const fs = require("fs");


const server = createServer((req, res) => {
    const home = fs.readFileSync("home.html");
    const about = fs.readFileSync("about.html");
    const services = fs.readFileSync("services.html");
    const contact = fs.readFileSync("contact.html");
    res.writeHead(200, "content-Type", "text/html");

    let url = req.url;

    if (url === "/") {
        res.end(home);
    }

    else if (url === "/about") {
        res.end(about)
    }

    else if (url === "/services") {
        res.end(services)
    }

    else if (url === "/contact") {
        res.end(contact)
    }

    else {
        res.statusCode = 200;
        "<h1>404 not found</h1>"
    };

});

server.listen(3000, "127.0.0.1", () => {
    console.log("server in running: http://127.0.0.1:3000");

})