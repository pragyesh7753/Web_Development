const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send("hey")
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "pragyesh",
        age: 25,
        email: "pragyesh@gmail.com"
    })

    res.send(user);
});

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postData: "hello kaise ho",
        user: "684aca4f0aeb9e5746f41404"

    })

    let user = await userModel.findOne({ _id: "684aca4f0aeb9e5746f41404" })
    user.posts.push(post._id)
    await user.save()

    res.send({ post, user });
});

app.listen(3000)