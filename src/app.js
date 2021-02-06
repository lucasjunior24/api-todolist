const express = require('express')
const router = require('./Utils/router')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const mongoConnection = process.env.MONGO_URL
const PORT = process.env.PORT || 3003

const app = express()

mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    // useFindAndModify: false,
}, () => console.log('connectado ao banco'))

app.use(cors())
app.use(express.json())
app.use(router)


app.listen(PORT, () => console.log('Servido rodando na porta 3003'))