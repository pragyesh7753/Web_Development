const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log("Middleware chala");
    next(); // Call next middleware or route handler
})
app.use(function (req, res, next) {
    console.log("Middleware chala ek aur bar");
    next();
})

// app.get(Route, requestHandler)  // requestHandler is a middleware function that handles the request
app.get('/', function (req, res) {
    res.send('Hello Champion!');
})
app.get('/about', function (req, res) {
    res.send('About page hai ye!');
})
app.get('/profile', function (req, res, next) {
    // res.send('Profile page hai ye!');
    return next(new Error("Not implemented!"));  // this is shown in console
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')  // this is shown to client(frontend)
})

app.listen(3000)