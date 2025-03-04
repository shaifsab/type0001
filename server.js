const express = require('express')
const app = express()
const router = require('./routes')
app.use(express.json())
app.use(router)
const db = require('./config/db')
require('dotenv').config()
app.set('view engine', 'ejs');
app.use(express.static('public')); 


db()


app.listen(8001, () => console.log('sever is running..'))