const express = require('express')
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://<db_username>:<Brainiacs827>@cluster0.h7qmnjk.mongodb.net/').then(() => console.log('MongoDB connected')).catch((error) => console.log(error))

const app = express()
const PORT = process.env.PORT || 5000;