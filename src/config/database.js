const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://deploy:<lucasteku24>@cluster0.jy1ah.mongodb.net/<todolist>?retryWrites=true&w=majority')