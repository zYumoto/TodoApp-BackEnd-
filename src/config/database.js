const mongoose= require("mongoose")
mongoose.Promise = global.Promise

module.exports = mongoose.connect("mongo.db://localhost/tudo")