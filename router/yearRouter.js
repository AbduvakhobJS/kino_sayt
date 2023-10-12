const express = require('express');
const router = express.Router()
const YearController = require('../controller/yearController')

router.post('/create', YearController.createOne)
router.get('/all', YearController.get_all)
router.get('/:id', YearController.get_one)
router.put('/:id', YearController.update_one)
router.delete('/:id', YearController.delete_one)



module.exports = router