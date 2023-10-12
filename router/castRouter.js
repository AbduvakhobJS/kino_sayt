const express = require('express');
const router = express.Router()
const CastController = require('../controller/castController')

router.post('/create', CastController.createOne)
router.get('/all', CastController.get_all)
router.get('/:id', CastController.get_one)
router.put('/:id', CastController.update_one)
router.delete('/:id', CastController.delete_one)



module.exports = router