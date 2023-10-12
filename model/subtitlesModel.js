const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema ({
    language_ID: {
         type: mongoose.Schema.ObjectId,
         ref: "cast",
         required: [true, "Language is required"]
    },
    kino_season_multfilm_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "model",
        required: [true, "Model is required"]
   },
   file: [{
    type: String,
    required: [true, "File is required"],
   }]
},
    {
        timestamps: true,
    },
)

module.exports = mongoose.model("subtitle", )