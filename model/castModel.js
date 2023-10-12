const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema({
    username: { type: String, required: [true, "Username  is required"] },
    speciality_ID: [{
         type: mongoose.Schema.ObjectId,
         ref: "speciality",
    }],
    image: [
        {
            type: String, required: [true, "Image is required"]
        }
    ]
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("cast", DefaultSchema)