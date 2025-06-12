// // const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');

// // app.use(cookieParser());

// app.get("/", (req, res) => {
//     // res.cookie("name", "pragyesh")
//     // res.send("done")
//     // bcrypt.genSalt(10, function (err, salt) {
//     //     bcrypt.hash("polololo", salt, function (err, hash) {
//     //         console.log(hash);

//     //     });
//     // });
//     bcrypt.compare("polololo", "$2b$10$lJmL1UjsTAJzoXe2qLZ4Oua0qvg44HpTEYyqrr0xrxXKNyOSxbOY6", function (err, result) {
//         console.log(result);
//     });
// })

// // app.get("/read", (req, res) => {
// //     // console.log(req.cookies)  // This will log all cookies sent by the client
// //     res.send("read page")
// // })

// app.listen(3000)
// const cookieParser = require('cookie-parser');

// JWT

// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// app.use(cookieParser());

// app.get("/", (req, res) => {
//     let token = jwt.sign({ email: "pragyesh@example.com" }, "secret")  // secret is stored very securely so that it can not be hacked or accssible at any cost
//     res.cookie("token", token)
//     // console.log(token);
//     res.send("done")
// })

// app.get("/read", (req, res) => {
//     // console.log(req.cookies);
//     console.log(req.cookies.token);
//     let data = jwt.verify(req.cookies.token, "secret")
//     console.log(data);
// })


// app.listen(3000)


const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const userModel = require("./models/user");
const user = require('./models/user');
const bcrypt = require('bcrypt');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
const jwt = require('jsonwebtoken');

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/create", (req, res) => {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt);
        bcrypt.hash(password, salt, async (err, hash) => {
            // console.log(hash);
            let createdUser = await userModel.create({
                username,
                email,
                password: hash, // Store the hashed password
                age
            })

            let token = jwt.sign({ email }, "shhhhhhhh")
            res.cookie("token", token)
            res.send(createdUser);
        });
    })

})

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email })
    if (!user) return res.send("Something went wrong")
    // console.log(user.password);

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        // console.log(result);
        if (result) {
            let token = jwt.sign({ email: user.email }, "shhhhhhhh")
            res.cookie("token", token)
            return res.send("Yes, you can login")
        }
        else {
            return res.send("Something went wrong")
        }

    })
})

app.get("/logout", (req, res) => {
    // res.clearCookie("token");
    res.cookie("token", "")
    res.redirect("/");
})

app.listen(3000)

