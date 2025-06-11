/* Basics
const express = require('express');
const { request } = require('http');
const app = express()
const path = require('path');

app.use(express.json())  // to parse JSON bodies
app.use(express.urlencoded({ encoded: true }))  // to parse URL-encoded bodies
app.use(express.static(path.join(__dirname, "public")))  // to search for static files in the public directory
app.set("view engine", "ejs")  // to set the view engine to ejs

app.get("/", function (req, res) {
    res.render("index")
})
app.get("/profile/:username", function (req, res) {  // to handle dynamic routes (: refers to a variable part of the URL)
    // req.params.username  // to access the username from the URL
    res.send(`Welcome, ${req.params.username}`)
})
app.get("/profile/:username/:age", function (req, res) {  // to handle dynamic routes (: refers to a variable part of the URL)
    // req.params.username  // to access the username from the URL
    res.send(`Welcome, ${req.params.username}`)
})

app.listen(3000, function () {
    console.log("it's running");
})

*/

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.get("/", function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        console.log(files);
        res.render("index", { files: files });
    })
})

app.get("/file/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
        res.render("show", { filename: req.params.filename, filedata: filedata })
    })
})
app.get("/edit/:filename", function (req, res) {
    res.render("edit", { filename: req.params.filename })
})
app.post("/edit", function (req, res) {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function (err) {
        res.redirect("/");
    })
})

app.post("/create", function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, function (err) {
        res.redirect("/");
    })
})

app.listen(3000)