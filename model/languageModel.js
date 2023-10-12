const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema({
    language: {
        uz: { type: String, required: [true, "Uzbek language is required"] },
        ru: { type: String, required: [true, "Russian language is required"] },
        en: { type: String, required: [true, "English language is required"] },
    },
    user: {
        type: mongoose.Schema.ObjectId, ref: "user"
    }
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("language", DefaultSchema)