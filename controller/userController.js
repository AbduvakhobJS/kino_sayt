const UserModel = require('../model/userModel')
const NewClass = require('../class/index')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const User = require("../model/user");
const config = require('../public/config/config')
const { v4: uuidv4 } = require('uuid');

exports.register = async (req, res, next) => {
    const result = new NewClass(UserModel, req, res, next)
    result.createData()
}
exports.login = async (req, res, next) => {
    const { phone, password } = req.body
    if (phone == "" || password == "" || !phone || !password) {
        res.json({
            message: "Fo'rmani to'liq kiriting 😒😒😒😒😒"
        })
    }
    else {
        const user = await UserModel.findOne({ phone: phone })
        if (!user || user == "" || user == null || user == undefined) {
            res.json({
                message: "Telefon topilmadi 😒😒😒😒😒"
            })
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch == false) {
                res.json({
                    message: "Parol topilmadi 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️"
                })
            } else {
                const token = JWT.sign(
                    {
                        name: user.username,
                        _id: user._id,
                        status: user.status,
                        role: user.role
                    },
                    "this_is_jwt_key",
                    {
                        expiresIn: 1000 * 60 * 60 * 2
                    }
                );
                res.json(token)
            }
        }
    }

}
exports.getOne = async (req, res, next) => {
    const result = new NewClass(UserModel, req, res, next)
    result.getOne()
}
exports.update_without_file = async (req, res, next) => {
    const result = new NewClass(UserModel, req, res, next)
    result.update_Without_File()
}
exports.update_with_file = async (req, res, next) => {
    const result = new NewClass(UserModel, req, res, next)
    result.update_With_File()
}

exports.findByRole = async (req, res, next) => {
    const { role } = req.query

    async function findRole(item) {
        await UserModel.find({ role: item }).exec((error, data) => {
            if(error) {
                return res.json({
                    message: "Malumot topilmadi"
                })
            }
            else {
                return res.json({
                    message: "Malumot topildi",
                    data: data
                })
            }
           
        })
    }


    if(role == "" || !role) {
        res.json({
            massage: "Role mavjud emas"
        })
    }else {
        if(role == "admin") {
            findRole("admin")
        }
        if(role == "user") {
            findRole("user")
        }
    }
}



exports.login_oson = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email == "" || password == "") {
        res.json({ success: false, message: "Please provide email or password" });
    }
    else {
        const user = await User.findOne({ email: email }).select("password");
        if (!user || user == "" || user == undefined || user == null) {
            res.json("Email is wrong");
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch || isMatch == false) {
                res.json("Password is wrong");
            }
            else {
                const user_data = await User.findOne({ email: email })
                if (!user_data || user_data == "") {
                    res.json({
                        success: false,
                        message: "User data is not defined for session - 1",
                    });
                } else {
                    const token = JWT.sign(
                        {
                            user: user_data
                        },
                        config.jwt_key,
                        {
                            expiresIn: config.jwt_time
                        }
                    );
                    res.json({
                        message: "Success",
                        status: true,
                        token: token
                    })
                }
            }
        }
    }
};

exports.register_oson = async (req, res, next) => {
    try {
        const user = await User.create({ ...req.body, uid: uuidv4() })
        await user.save()
        res.json(user)
    }
    catch (e) {
        res.json(e)
    }
};


exports.decodeToken = async (req, res, next) => {
    const token = req.headers.authorization
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const decodeToken = JSON.parse(jsonPayload);
    res.json(decodeToken)
}
    