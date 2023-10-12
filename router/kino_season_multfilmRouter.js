const express = require('express');
const router = express.Router()
const  Kino_season_multfilm_Controller  = require('../controller/kino_season_multfilmController')
const multer = require('multer')
const path = require('path')
const md5 = require('md5')


const STORAGE = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/img");
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
})
const uploads = multer({ storage: STORAGE});


router.put('/qoshish', uploads.single("IMAGE"), Kino_season_multfilm_Controller.update_one)
router.post('/create', Kino_season_multfilm_Controller.createOne)
router.get('/all', Kino_season_multfilm_Controller.get_all)
router.get('/:id', Kino_season_multfilm_Controller.get_one)
router.put('/:id', Kino_season_multfilm_Controller.update_one)
router.delete('/:id', Kino_season_multfilm_Controller.delete_one)



module.exports = router