const TagController = require('../model/tagModel')
const NewClass = require('../class/index')

exports.createOne = async (req, res, next) => {
    const result = new NewClass(TagController, req, res, next)
    result.createData()
}
exports.get_one = async (req, res, next) => {
    const result = new NewClass(TagController, req, res, next)
    result.getOne()
}
exports.get_all = async (req, res, next) => {
    const result = new NewClass(TagController, req, res, next)
    result.getAll()
}

exports.update_one = async (req, res, next) => {
    const result = new NewClass(TagController, req, res, next)
    result.update_Without_File()
}

exports.delete_one = async (req, res, next) => {
    const result = new NewClass(TagController, req, res, next)
    result.deleteOne()
}