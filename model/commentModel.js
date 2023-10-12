const mongoose = require('mongoose');
const CommentSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    message: {
        type: String,
        required: [true, "Message is required"]
    },
    news_ID: {
        type: mongoose.Schema.ObjectId,
        ref:"news",
        required:[true, "News is reqiured"],
    },
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0

    }


},
    {
        timestamps: true
    }
)
module.exports = mongoose.model('comment', CommentSchema) 