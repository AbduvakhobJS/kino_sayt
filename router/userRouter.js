const express = require('express');
const router = express.Router()
const UserController = require('../controller/userController')
const multer = require('multer');
const md5 = require('md5');
const path = require('path');


const Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public')
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ storage: Storage })

 
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/image', upload.array("rasm", 3),  UserController.update_with_file)
router.get('/me/data', UserController.decodeToken)
router.get('/role', UserController.findByRole)
router.get('/:id', UserController.getOne)
router.put('/:id', UserController.update_without_file)



module.exports = router