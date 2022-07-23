const express = require('express')
const expressLayouts = require('express-ejs-layouts')


const fileUpload = require('express-fileupload')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const flash = require('connect-flash')


const app = express()
const PORT = process.env.PORT || 3000

require('dotenv').config()

// false: querystring library  or true: the qs library <-- allow carete nested objects 
app.use(express.urlencoded( { extended: true } ))
// allow use files within public folder
app.use(express.static('public'))
// avoid writing duplicated code in website / application easily maintainable
app.use(expressLayouts)

app.use(cookieParser('CookieBlogSecure'))
app.use(session({
  secret:'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}))

app.use(flash())
app.use(fileUpload())

app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes)

app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`))