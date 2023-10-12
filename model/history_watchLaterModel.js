const mongoose = require('mongoose')
const DefaultSchema = mongoose.Schema({

 Kino_Season_Multfilm_ID: [{
    type: mongoose.Schema.ObjectId,
    ref: "model"
 }],


 user_ID: [{
   type: mongoose.Schema.ObjectId,
   ref: "user"
}],


views: {
   type: Number,
   default: 0
},

 status:{
    type: Number,
    default: 0
 }


},
    {
        timestamp: true
    }
)


module.exports = mongoose.model("watchlater", DefaultSchema)