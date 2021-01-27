const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://deploy:<lucasteku>@cluster0.jy1ah.mongodb.net/<todo>?retryWrites=true&w=majority')