const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://deploy:<password>@cluster0.jy1ah.mongodb.net/<dbname>?retryWrites=true&w=majority')