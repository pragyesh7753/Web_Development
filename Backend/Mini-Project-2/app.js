const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const user = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render("index")
});

app.post('/register', async (req, res) => {
    let { email, username, name, age, password } = req.body;
    let user = await userModel.findOne({ email })

    if (user) return res.status(500).send("User already registered")

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                email,
                age,
                name,
                password: hash
            })

            let token = jwt.sign({ email: email, userid: user._id }, "shhh")  // "shhh" is a secret key"
            res.cookie("token", token)
            res.send("Registered successfully")
        })
    });
});

app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email })

    if (!user) return res.status(500).send("Something went wrong")

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "shhh")  // "shhh" is a secret key"
            res.cookie("token", token)
            res.redirect("/profile")
        }
        else res.redirect("/login")

    })
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.get("/profile", isLoggedIn, async (req, res) => {
    // console.log(req.user);
    let user = await userModel.findOne({ email: req.user.email }).populate("posts")
    // console.log(user);
    res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user");
    const userId = req.user.userid;
    const index = post.likes.map(id => id.toString()).indexOf(userId);
    if (index === -1) {
        post.likes.push(userId); // Like
    } else {
        post.likes.splice(index, 1); // Unlike
    }
    await post.save();
    res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user");
    res.render("edit", { post })
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOneAndUpdate({ _id: req.params.id }, { content: req.body.content })
    res.redirect("/profile")
});

app.post("/post", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    let { content } = req.body;
    let post = await postModel.create({
        user: user._id,
        content
    })

    user.posts.push(post._id);
    await user.save()
    res.redirect("/profile");
});

app.get("/logout", (req, res) => {
    res.cookie("token", "")
    res.render("login")
});

function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");
    let data = jwt.verify(token, "shhh");
    req.user = data;
    next();
}

app.listen(3000)