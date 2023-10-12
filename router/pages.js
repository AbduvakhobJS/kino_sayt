const express = require('express');
const router = express.Router()


router.get('/', (req, res, next) => {
    res.render(
        './login.ejs', {
            layout: "./main.ejs"
        }
    )
})
router.get('/register', (req, res, next) => {
    res.render(
        './register.ejs', {
            layout: "./main.ejs"
        }
    )
})
router.get('/profile', (req, res, next) => {
    res.render(
        './profile.ejs', {
            layout: "./main.ejs"
        }
    )
})
router.get('/admin', (req, res, next) => {
    res.render(
        './admin.ejs', {
            layout: "./main.ejs"
        }
    )
})

router.get('/Login2', (req, res, next) => {
    res.render(
        './Login2.ejs', {
            layout: "./main.ejs"
        }
    )
})

module.exports = router