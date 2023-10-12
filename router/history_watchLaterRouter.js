const express = require('express')
const router = express.Router()
const HistoryController = require('../controller/history_watchLater')


router.post('/create', HistoryController.createOne)
router.get('/plus/:id', HistoryController.views)
router.get('/minus/:id', HistoryController.NotView)

module.exports = router