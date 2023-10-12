const CategoryController = require('../model/categoryModel')
const NewClass = require('../class/index')

exports.createOne = async (req, res, next) => {
    const result = new NewClass(CategoryController, req, res, next)
    result.createData()
}
exports.get_one = async (req, res, next) => {
    const result = new NewClass(CategoryController, req, res, next)
    result.getOne()
}
exports.get_all = async (req, res, next) => {
    const result = new NewClass(CategoryController, req, res, next)
    result.getAll()
}

exports.update_one = async (req, res, next) => {
    const result = new NewClass(CategoryController, req, res, next)
    result.getAll()
}

exports.delete_one = async (req, res, next) => {
    const result = new NewClass(CategoryController, req, res, next)
    result.deleteOne()
}