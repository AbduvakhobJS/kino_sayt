const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema({
    name: {
        uz: {
            type: String,
            required: [true, "Video is required"]
        },
        ru: {
            type: String,
            required: [true, "Video is required"]
        },
        en: {
            type: String,
            required: [true, "Video is required"]
        },
    },
    description: {
        uz: {
            type: String,
            required: [true, "Video is required"]
        },
        ru: {
            type: String,
            required: [true, "Video is required"]
        },
        en: {
            type: String,
            required: [true, "Video is required"]
        },
    },
    video_image: [{
        type: String,
    }],
    kino_time: [{
        type: Number,
        required: [true, "Kino_time is required"]
    }],
    views: {
        type: Number,
        default: 0,
        
        
    },
    rating: {
        type: Number, enum: [  1,  2,  3,  4,  5 ], 
    },
    kino_season_multfilm_ID:[{
        type: mongoose.Schema.ObjectId,
        ref: "model",
    }],
    quality: [{
        type: Number,
        required: [true, " Quality is required"]
    }]
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("video", DefaultSchema) 