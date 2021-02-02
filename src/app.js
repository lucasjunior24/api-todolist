const express = require('express')
// const router = require('./Utils/router')
const mongoose = require('mongoose')
require('dotenv').config()

const mongoConnection = process.env.MONGO_URL

const app = express()

mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('connectado ao banco'))

const port = process.env.PORT || 3333
app.use(express.json())
// app.use(router)

app.listen(port, () => console.log('Servido rodando na porta 3333'))