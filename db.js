const express = require('express')
require("dotenv").config()
const connetcDB = require('./db')

const app = express()

connetcDB()

app.get('/test-api' , function(req, res){
    res.send('NOSSA API TA FUNCIONANDO')
})

app.listen(8000)