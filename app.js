const express = require('express')
var pug = require('pug')
const bodyParser = require('body-parser')

const app = express()

var routes = require('./routes/routes');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set('view engine','pug')

app.use('/',routes)

app.listen(3000)