const CastController = require('../model/castModel')
const NewClass = require('../class/index')

exports.createOne = async (req, res, next) => {
    const result = new NewClass(CastController, req, res, next)
    const {
        username,
        speciality_ID,
        image
    } = req.body

    const speciality = []
    for (let item of speciality_ID) {
        const values = item
        speciality.push(values)
    }

    result.createData()
}
exports.get_one = async (req, res, next) => {
    const result = new NewClass(CastController, req, res, next)
    result.getOne()
}
exports.get_all = async (req, res, next) => {
    const result = new NewClass(CastController, req, res, next)
    result.getAll()
}
exports.update_one = async (req, res, next) => {
    const result = new NewClass(CastController, req, res, next)
    result.update_Without_File()
}
exports.delete_one = async (req, res, next) => {
    const result = new NewClass(CastController, req, res, next)
    result.deleteOne()
}
exports.update_with_file = async (req, res, next) => {
    const result = new NewClass(UserModel, req, res, next)
    result.update_With_File()
}