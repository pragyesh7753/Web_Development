const express = require('express');
const app = express();
const userModel = require('./usermodel'); // Importing the user model

app.get('/', (req, res) => {
    res.send('Hey!');
});

// app.get('/create', async (req, res) => {
//     let createduser = await userModel.create({
//         name: "pragyesh",
//         email: "spragyesh86@gmail.com",
//         username: "spragyesh86"
//     })

//     res.send(createduser)
// });
app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "pragyeshi",
        email: "spragyesh@gmail.com",
        username: "spragyeshi"
    })

    res.send(createduser)
});

app.get("/read", async (req, res) => {
    let users = await userModel.find()  //This will return an array of users, and if any users not found, it will return an empty array
    // let users = await userModel.find({ username: "spragyesh86" })
    // let users = await userModel.findOne({ username: "spragyesh86" }) // This will return a single user object, and if not found, it will return null, and also gives first user if multiple users found
    res.send(users)
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({ username: "spragyesh86" }, { name: "pragyesh kumar seth" }, { new: true })
    res.send(updateduser)
});

app.get('/delete', async (req, res) => {
    let deleteduser = await userModel.findOneAndDelete({ username: "spragyeshi" })
    res.send(deleteduser)
})

app.listen(3000)