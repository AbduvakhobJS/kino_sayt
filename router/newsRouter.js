const express = require('express');
const router = express.Router()
const NewsController = require('../controller/newsController')

router.post('/create', NewsController.createOne)
router.get('/all', NewsController.get_all)
router.post('/rating', NewsController.newsRating)
router.get('/plus/:id',NewsController.news_one)
router.get('/minus/:id',NewsController.news_twe)
router.get('/:id', NewsController.get_one)
router.put('/:id', NewsController.update_one)
router.delete('/:id', NewsController.delete_one)



module.exports = router