const express = require('express');
const router = express.Router()
const VideoController = require('../controller/videoController')
const multer = require('multer')
const path = require('path')
const md5 = require('md5')


const Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/video");
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
})
const uploads = multer({ storage: Storage});



router.post('/create', VideoController.createOne)
router.get('/all', VideoController.get_all)
router.put('/rating/:id', VideoController.videoRating)
router.get('/view/:id', VideoController.ziyo_one)
router.get('/minus/:id', VideoController.ziyo_twe)
router.get('/:id', VideoController.get_one)
router.delete('/:id', VideoController.delete_one)
router.put('mine/:id', uploads.array("Video", 15), VideoController.updateSingleFile)
// router.put('/:id', uploads.array("Video", 15), VideoController.update_one)
// router.put('/video/:id', uploads.array("Video", 15), VideoController.update_with_file)

module.exports = router