const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase")

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: String,
    age: {
        type: Number,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
})

module.exports = mongoose.model('user', userSchema);