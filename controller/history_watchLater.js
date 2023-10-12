const History = require('../model/history_watchLaterModel')
const NewClass = require('../class/index')
const history_watchLaterModel = require('../model/history_watchLaterModel')
const { findByIdAndUpdate } = require('../model/history_watchLaterModel')

  


exports.createOne = async (req, res, next) => {
    const result = new NewClass(history_watchLaterModel, req, res, next)
    result.createData()
}

exports.views = async ( req, res, next ) => {
    const result = await history_watchLaterModel.findByIdAndUpdate(req.params.id)
    result.views = result.views += 1
    result.save()
    res.json(result)
}

exports.NotView = async ( req, res, next ) => {
    const result = await history_watchLaterModel.findByIdAndUpdate(req.params.id)
    result.views = result.views -= 1
    result.save()
    res.json(result)
}
