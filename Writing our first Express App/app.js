const express = require("express");
const path = require("path")
const app = express();
const port = 80;

app.use("/static", express.static("static"));

app.set('view engine', 'pug')

app.set("views", path.join(__dirname, "views"));

app.get('/home', (req, res) => {
    res.render('home', {
        title: 'My Page',
        message: 'Hello Bilal!',
        items: ['Home', 'About', 'Services', 'Contact'],
        para: "This is home page"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'My Page',
        message: 'Hello Bilal!',
        items: ['Home', 'About', 'Services', 'Contact'],
        para: "This is about page"
    });
});

app.get('/services', (req, res) => {
    res.render('services', {
        title: 'My Page',
        message: 'Hello Bilal!',
        items: ['Home', 'About', 'Services', 'Contact'],
        para: "This is services page"
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'My Page',
        message: 'Hello Bilal!',
        items: ['Home', 'About', 'Services', 'Contact'],
        para: "This is contact page"
    });
});

app.get("/", (req, res) => {
    res.send("This is homepage of my first express app")
});

app.get("/this", (req, res) => {
    res.status(404).send("This page is not found on my website cwh");
});

app.get("/users", (req, res) => {
    res.json({ name: "Bilal", role: "Frontend Dev" });
});

app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});