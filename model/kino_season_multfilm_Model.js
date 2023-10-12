const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema({
    name: {
        uz: {
            type: String,
            required: [true, "Uz is required"]
        },
        ru: {
            type: String,
            required: [true, "Ru is required"]
        },
        en: {
            type: String,
            required: [true, "En is required"]
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
    age: {
        type: String,
        enum: ["0+", "6+", "12+", "16+", "18+"], required: true
    },
    image: [{
        type: String,
    }],
    rating: {
        type: Number, default: 0
    },
    budget: {
        type: String, required: true
    },

    category_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "category",
        required: [true, "Category is required"]
    }],
    year_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "year",
        required: [true, "Year is required"]
    }],
    language_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "language",
        required: [true, "Language is required"]
    }],
    subtitle_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "subtitle",
        required: [true, "Subtitle is required"]
    }],
    cast_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "cast",
        required: [true, "Cast is required"]
    }],
    director_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "director",
        required: [true, "Director is required"]
    }],
    country_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "davlatlar",
        required: [true, "Dalatlar is required"]
    }],
    janr_ID: [{
        type: mongoose.Schema.ObjectId,
        ref: "janr",
        required: [true, "Category is required"]
    }],
    action: {
        type: String, enum: ["multfim", "kino", "serial"], required: true,
    },
    payment: {
        type: String, enum: ["pay", "none"], default: "none",
    },
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("model", DefaultSchema) 


















