const fs = require("fs");

// let text = fs.readFileSync("test.txt", "utf-8");
// text = text.replace("Node", "javaScript");
// fs.writeFileSync("style.txt", text);
// console.log(text);


fs.readFile("test.txt", "utf-8", (eror, data) => {
    console.log(eror, data);
});

console.log("This is a masseges");
