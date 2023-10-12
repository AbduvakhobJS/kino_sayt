const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema({
    name: {
        uz: { type: String, required: [true, "Uzbek language is required"] },
        ru: { type: String, required: [true, "Russian language is required"] },
        en: { type: String, required: [true, "English language is required"] },
    },
   
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("tag", DefaultSchema)