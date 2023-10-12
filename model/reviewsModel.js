const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema ({
    user_ID: {

        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: [true, "User is required"]

    },
    video_ID: {

        type: mongoose.Schema.ObjectId,
        ref: "video",
        required: [true, "Video is required"]

    },
    message: {
        type: String,
        required:[true, "Message is required"]
    },

    rating: {
        type: Number,
        default: 0
    },


},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("reviews", DefaultSchema)