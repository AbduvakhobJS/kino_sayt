const express = require('express')
const router = express.Router()
const oson = require('../controller/Oson')

router.post('/pay', oson.createPayment)
router.post('/check', oson.checkPaymentStatus)
router.post('/return', oson.reversePayment)


module.exports = router