const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const connection = mongoose.connection
connection.once('open', () => {
    console.log('conectado ao banco atlas')
})

module.exports = mongoose.connect(process.env.MONGO_URL)
