const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// create database connection
mongoose.connect(
    'mongodb+srv://usmantufail:Usman12345@cluster0.4cop7.mongodb.net/'
)
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error));

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({})
)