const express = require('express');
const router = express.Router()
const LanguageController = require('../controller/languageController')

router.post('/create', LanguageController.createOne)
router.get('/all', LanguageController.get_all)
router.get('/:id', LanguageController.get_one)
router.put('/:id', LanguageController.update_one)
router.delete('/:id', LanguageController.delete_one)



module.exports = router