const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema({
    year: { type: String, required: [true, "Name is required"] },
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("year", DefaultSchema)