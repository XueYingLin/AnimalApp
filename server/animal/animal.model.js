var mongoose = require('mongoose')
var Schema = mongoose.Schema

var animalSchema = new Schema({
  img: String,
  name: String,
  info: String,
})

var animalModel = mongoose.model('animal', animalSchema, 'animal')

module.export = animalModel
