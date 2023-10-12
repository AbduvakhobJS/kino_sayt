const VideoController = require('../model/videoModel')
const NewClass = require('../class/index')
const fs = require("fs")
const path = require('path')
const { findByIdAndUpdate } = require('../model/videoModel')

exports.createOne = async (req, res, next) => {
    const result = new NewClass(VideoController, req, res, next)
    result.createData()
}
exports.get_one = async (req, res, next) => {
    const result = new NewClass(VideoController, req, res, next)
    result.getOne()
}
exports.get_all = async (req, res, next) => {
    const result = new NewClass(VideoController, req, res, next)
    result.getAll()
}
exports.update_one = async (req, res, next) => {
    const result = new NewClass(VideoController, req, res, next)
    result.update_Without_File()
}
exports.update_with_file = async (req, res, next) => {
    const result = new NewClass(VideoController, req, res, next)
    result.update_With_File()
}
exports.updateSingleFile = async (req, res, next) => {
    // eski faylni ochir
    await SINGLE_FILE.findById(req.params.id).exec((error, data) => {
        if (error) { throw error }
        else {
            const filePath = path.join(__dirname, "../public/img/video/" + data.image)
            fs.unlink(filePath, function (error) {
                if (error) {
                    console.log("Old file isn't deleted")
                }
                console.log("Old file is deleted")
            })
        }
    })

    // yangisini yukla
    const { filename } = req.file
    const result = await SINGLE_FILE.findByIdAndUpdate(req.params.id)
    result.image = filename
    await result.save()
        .then(() => res.json(result))
        .catch((error) => res.json(error))
}
exports.delete_one = async (req, res, next) => {
    const result = new NewClass(VideoController, req, res, next)
    result.deleteOne()
}
exports.ziyo_one = async (req, res, next) => {
    const result = await VideoController.findByIdAndUpdate(req.params.id)
    result.views = result.views += 1
    result.save()
    res.json(result)
    
}
exports.ziyo_twe = async (req, res, next) => {
    const result = await VideoController.findByIdAndUpdate(req.params.id)
    result.views = result.views -= 1
    result.save()
    res.json(result)
    
}
exports.videoRating = async (req, res, next) => {
    const result = new NewClass(VideoController, req, res, next)
    result.createData()
}

