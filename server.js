const express = require('express')
const articleRouter = require("./routes/articles")
const Article = require('./models/article')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb+srv://admin:dashing4149@cluster0.mqtu0jn.mongodb.net/');
app.set("views", "./view")
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async(req, res) => {
    const articles =await Article.find().sort({ createdAt:'desc'})
    res.render('articles/btak', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(3000,()=>console.log("Server is listening to port 3000!!"))
