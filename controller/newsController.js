const NewsController = require('../model/newsModel')
const NewClass = require('../class/index')
const fs = require("fs")
const path = require('path')
const { findByIdAndUpdate } = require('../model/newsModel')
//@description
//@api: /api/news/create
//@method: POST

// exports.createOne = async (req, res, next) => {
//     const {
//         nameuz,
//         nameru,
//         nameen,
//         descriptionuz,
//         descriptionru,
//         descriptionen,


//     } = req.body

//     const urls = req.files
//     const files = []
//     for (let item of urls) {
//         let { filename } = item
//         files.push(filename)
//     }



//     const result = new NewsModel({
//         name: {
//             uz: nameuz,
//             ru: nameru,
//             en: nameen
//         },
//         description: {
//             uz: descriptionuz,
//             ru: descriptionru,
//             en: descriptionen
//         },
//         image: files

//     })
//     await result
//         .save()
//         .then(() => {
//             res.json(result);
//         })
//         .catch((error) => {
//             res.json(error)
//         });
// }
exports.createOne = async (req, res, next) => {
    const result = new NewClass(NewsController, req, res, next)
    result.createData()
}
exports.get_one = async (req, res, next) => {
    const result = new NewClass(NewsController, req, res, next)
    result.getOne()
}
exports.get_all = async (req, res, next) => {
    const result = new NewClass(NewsController, req, res, next)
    result.getAll()
}
exports.update_one = async (req, res, next) => {
    const result = new NewClass(NewsController, req, res, next)
    result.update_Without_File()
}
exports.update_with_file = async (req, res, next) => {
    const result = new NewClass(NewsController, req, res, next)
    result.update_With_File()
}
exports.delete_one = async (req, res, next) => {
    const result = new NewClass(NewsController, req, res, next)
    result.deleteOne()
}
exports.news_one = async (req, res, next) => {
    const result = await NewsController.findByIdAndUpdate(req.params.id)
    result.views = result.views += 1
    result.save()
    res.json(result)
    
}
exports.news_twe = async (req, res, next) => {
    const result = await NewsController.findByIdAndUpdate(req.params.id)
    result.views = result.views -= 1
    result.save()
    res.json(result)
    
}
exports.newsRating = async (req, res, next) => {
    const result = new NewClass(NewsController, req, res, next)
    result.createData()
}
