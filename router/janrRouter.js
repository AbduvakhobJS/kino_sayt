const express = require('express');
const router = express.Router()
const JanrController = require('../controller/janrController')

router.post('/create', JanrController.createOne)
router.get('/all', JanrController.get_all)
router.get('/:id', JanrController.get_one)
router.put('/:id', JanrController.update_one)
router.delete('/:id', JanrController.delete_one)



module.exports = router