const express = require('express');
const router = express.Router()
const TagController = require('../controller/tagController')

router.post('/create', TagController.createOne)
router.get('/all', TagController.get_all)
router.get('/:id', TagController.get_one)
router.put('/:id', TagController.update_one)
router.delete('/:id', TagController.delete_one)



module.exports = router