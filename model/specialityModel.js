const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("speciality", DefaultSchema)