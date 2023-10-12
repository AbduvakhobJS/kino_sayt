const express = require('express')
const router = express.Router()




router.get('/admin/layout', async (req, res, next) => {
    res.render('./admin/layout.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard
router.get('/admin/dashboard', async (req, res, next) => {
    res.render('./admin/dashboard.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/cast

router.get('/admin/cast', async (req, res, next) => {
    res.render('./admin/cast.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/castFilm', async (req, res, next) => {
    res.render('./admin/castFilm.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/category', async (req, res, next) => {
    res.render('./admin/category.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/comment', async (req, res, next) => {
    res.render('./admin/comment.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/davlatlar', async (req, res, next) => {
    res.render('./admin/davlatlar.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/janr', async (req, res, next) => {
    res.render('./admin/janr.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/kino_season_multfilm', async (req, res, next) => {
    res.render('./admin/kino_season_multfilm.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/language', async (req, res, next) => {
    res.render('./admin/language.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/news', async (req, res, next) => {
    res.render('./admin/news.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/rating', async (req, res, next) => {
    res.render('./admin/rating.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/reply', async (req, res, next) => {
    res.render('./admin/reply.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/speciality', async (req, res, next) => {
    res.render('./admin/speciality.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/subtitle', async (req, res, next) => {
    res.render('./admin/subtitle.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/tag', async (req, res, next) => {
    res.render('./admin/tag.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/user', async (req, res, next) => {
    res.render('./admin/user.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/video', async (req, res, next) => {
    res.render('./admin/video.ejs', {layout: './admin/layout.ejs'})
})

//api: /admin/dashboard

router.get('/admin/year', async (req, res, next) => {
    res.render('./admin/year.ejs', {layout: './admin/layout.ejs'})
})





module.exports = router