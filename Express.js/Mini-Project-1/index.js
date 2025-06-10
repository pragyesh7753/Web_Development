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

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.get("/", function (req, res) {
    res.render("index");
})

app.listen(3000)