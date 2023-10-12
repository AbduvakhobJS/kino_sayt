const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const DefaultSchema = mongoose.Schema({
    username: {
        type: String, required: [true, "Name is required"]
    },
    image: [{
        type: String, default: "none"
    }],
    phone: {
        type: String, required: [true, "Phone is required"], unique: true
    },
    password: {
        type: String, required: [true, "Password is required"]
    },
    link: {
        type: String,
    },
    status: {
        type: String, enum: ["none","vip"], default: "none"
    },
    balance: {
        type: Number, default: 0
    },
    deadlineTarif: {
        type: String
    },
    uuid: {
        type: String, required: [true,"UUID is required"]
    },
    role: {
        type: String, enum :["admin", "user"], default: "user"
    }
},
    {
        timestamps: true,
    
})
DefaultSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})




module.exports = mongoose.model("user", DefaultSchema)