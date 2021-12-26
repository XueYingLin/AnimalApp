var mongoose = require('mongoose')
var Schema = mongoose.Schema

var catSchema = new Schema({
  img: String,
  name: String,
  info: String,
})

var catModel = mongoose.model('cat', bookSchema, 'cat')

module.exports = catModel
