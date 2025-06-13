const express = require('express');
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("hey");
});


app.listen(3000)