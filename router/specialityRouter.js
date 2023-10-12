const express = require('express');
const router = express.Router()
const SpecialityController = require('../controller/specialityController')

router.post('/create', SpecialityController.createOne)
router.get('/all', SpecialityController.get_all)
router.get('/:id', SpecialityController.get_one)
router.put('/:id', SpecialityController.update_one)
router.delete('/:id', SpecialityController.delete_one)



module.exports = router