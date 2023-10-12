const express = require('express')
const router = express.Router()


router.get('/client/login', async (req, res, next) => {
    res.render('./client/login.ejs', {layout: './client/login.ejs'})
})


module.exports = router