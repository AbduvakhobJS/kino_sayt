const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema ({
    cast_ID: {
         type: mongoose.Schema.ObjectId,
         ref: "cast",
         required: [true, "Cast is required"]
    },
    kino_season_multfilm_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "model",
        required: [true, "Model is required"]
   }
},
    {
        timestamps: true,
    },
)

module.exports = mongoose.model("cast_film", )