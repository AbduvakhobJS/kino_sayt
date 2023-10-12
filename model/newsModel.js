const mongoose = require('mongoose')
const { stringify } = require('uuid')
const DefaultSchema = mongoose.Schema({
    name: {
        uz: {
             type: String,
             required: [true, "Model is required"] 
            },
        ru: {
             type: String,
             required: [true, "Model is required"] 
            },
        en: { 
            type: String, 
            required: [true, "Model is required"]
            },
    },
    description: {
        uz: { 
            type: String, 
            required: [true, "Model is required"]
            },
        ru: {
             type: String, 
             required: [true, "Model is required"] 
            },
        en: {
             type: String, 
             required: [true, "Model is required"] 
            },
    },
    image: [
        {
        type: String, required: [true, "Image is required"]
    }
],
    views: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },

},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("news", DefaultSchema)