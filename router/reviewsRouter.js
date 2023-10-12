const express = require('express')
const router = express.Router()
const ReviewsController = require('../controller/reviewsController')

router.post('/create', ReviewsController.createReviews)
router.post('/rating/:id', ReviewsController.reviewsRating)





module.exports = router