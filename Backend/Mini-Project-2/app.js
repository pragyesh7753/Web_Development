const express = require('express');
const app = express();
const userModel = require('./models/user');

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("hey");
});
app.post('/create', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000)