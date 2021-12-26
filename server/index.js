const path = require('path')
const express = require('express')
var bodyParser = require('body-parser')

const AnimalService = require('./animal')

const PORT = process.env.PORT || 3001
const app = express()

const animal = require('./animal')

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
    const animals = await animal.listAnimals()
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

  const newAnimal = {
    img,
    name,
    info,
  }

  try {
    await animal.addAnimal(newAnimal)
    res.json(newAnimal)
  } catch (e) {
    next(e)
  }
})

app.get('/deleteAnimal', async (req, res) => {
  const id = req.query.id

  await animal.deleteAnimal(id)
  res.json(id)

  console.log('Deleted', id)
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})
