const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/miniproject')

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("post", postSchema)