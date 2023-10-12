const express = require('express');
const router = express.Router()
const DavlatlarController = require('../controller/davlatlarController')

router.post('/create', DavlatlarController.createOne)
router.get('/all', DavlatlarController.get_all)
router.get('/:id', DavlatlarController.get_one)
router.put('/:id', DavlatlarController.update_one)
router.delete('/:id', DavlatlarController.delete_one)



module.exports = router