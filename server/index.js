const path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

const AnimalService = require('./animal')

const PORT = process.env.PORT || 3001
const app = express()

mongoose.Promise = global.Promise

var uri = 'mongodb://localhost:27017/animals'
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/listAnimals', async function (req, res, next) {
  try {
    const animals = await AnimalService.listAnimals()
    res.json(animals)
  } catch (e) {
    next(e)
  }
})

// All other GET requests not handled before will return our React app
app.get('/addAnimal', async function (req, res, next) {
  const img = req.query.img
  const name = req.query.name
  const info = req.query.info

  try {
    const animals = await AnimalService.addAnimal(img, name, info)
    res.json(animals)
  } catch (e) {
    next(e)
  }
})

app.get('/deleteAnimal', async (req, res) => {
  const id = req.query.id

  await AnimalService.deleteAnimal(id)

  console.log('Deleted', id)
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})
