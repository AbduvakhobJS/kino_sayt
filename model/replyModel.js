const mongoose = require('mongoose')
const DefaulSchema = mongoose.Schema ({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    message: {
        type: String,
        required: [true, "Message is required"]
    },
    comment_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "comment",
        required: [true, "Comment is required"]
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('reply', DefaulSchema)