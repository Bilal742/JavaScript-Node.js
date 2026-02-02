const express = require("express");
const app = express();
const port = 80;
const path = require('path');

app.use("/static", express.static("static"));

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    const con = "This is a practice page on pug";
    const params = { "tittle": "This is practice set", "content": con };
    res.status(200).render('index.pug', params);
})

app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
})