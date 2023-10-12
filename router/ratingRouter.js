const express = require('express');
const router = express.Router()
const RatingController = require('../controller/ratingController')

router.post('/create', RatingController.createRating)  




module.exports = router