const express = require('express')
const router = express.Router()
const path = require('path')
var data = require('../model/categories.json')


router.get('/empty',(req,res) => 
{
    res.render('layouts/main')
})
router.get('/ejemplo',(req,res) => 
{
    res.render('ejemplo')
})
router.post('/ejemplo', (req,res) => 
{

    res.render('layouts/main')
})

router.get('/categorias' , (req,res) => 
{
    const categories = data.categories // An array
    res.render('categorias',{data:categories})
})


module.exports = router;