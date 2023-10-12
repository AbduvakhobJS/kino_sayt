const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const expresslayoutsejs = require('express-ejs-layouts')
const Database = require('./database/userDatabase')


//oson tolov tizimiga tegishli
app.use('/api/payment', require('./router/Oson'));
// app.use('/api/user', require('./router/user'));


//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({origin: "*"}))
app.use(expresslayoutsejs)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")



app.use(express.static(path.join(__dirname, "public")))
Database.DatabaseConnection()




//Router
app.use('/user', require('./router/userRouter'))
app.use('/category', require('./router/categoryRouter'))
app.use('/year', require('./router/yearRouter'))
app.use('/language', require('./router/languageRouter'))
app.use('/tag', require('./router/tagRouter'))
app.use('/janr', require('./router/janrRouter'))
app.use('/davlatlar', require('./router/davlatlarRouter'))
app.use('/speciality', require('./router/specialityRouter'))
app.use('/cast', require('./router/castRouter'))
app.use('/news', require('./router/newsRouter'))
app.use('/kino', require('./router/kino_season_multfilmRouter'))
app.use('/video', require('./router/videoRouter'))
app.use('/rating', require('./router/ratingRouter'))
app.use('/reply', require('./router/replyRouter'))
app.use('/comment', require('./router/commentRouter'))
app.use('/watchlater', require("./router/history_watchLaterRouter"))
app.use('/reviews', require('./router/reviewsRouter'))



app.use('/api/payment', require('./router/Oson'));






app.use('/', require('./router/pages'))
app.use('/', require('./page/admin'))
app.use('/', require('./page/client'))










    
app.get("*", (req, res) => { res.json('API is not found') })
app.listen(4000, () => {
    console.log("Server is on");
})