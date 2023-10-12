const express = require('express')
const router = express.Router()
const commentController = require('../controller/commentController')

router.post('/create', commentController.createComment)
router.get('/:id', commentController.filterComment)
router.get('/plus/:id', commentController.like_one)
router.get('/minus/:id', commentController.like_twe)
router.get('/dislike/:id', commentController.dislike_one)
router.get('/dislikeminus/:id', commentController.dislike_twe)




module.exports = router