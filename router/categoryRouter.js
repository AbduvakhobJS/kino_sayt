const express = require('express');
const router = express.Router()
const CategoryController = require('../controller/categoryController')

router.post('/create', CategoryController.createOne)
router.get('/all', CategoryController.get_all)
router.get('/:id', CategoryController.get_one)
router.put('/:id', CategoryController.update_one)
router.delete('/:id', CategoryController.delete_one)



module.exports = router