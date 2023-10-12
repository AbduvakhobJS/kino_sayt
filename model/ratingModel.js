const { Schema, model } = require("mongoose");

const DefaultSchema = Schema (
    {
        rating: {
            type: Number,
            enum: [
                1, 2, 3, 4, 5,
            ],
            required: true
        },
        kino_season_multfilm_ID: { type: Schema.ObjectId, ref: "model", }
    },
    {
        timestamps: true,
    }
);

module.exports = model("rating", DefaultSchema);