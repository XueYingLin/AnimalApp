const { ObjectID } = require('bson')
const mongo = require('mongodb')

const client = new mongo.MongoClient('mongodb://localhost:27017/animals')

async function getCollection() {
  await client.connect()
  return client.db('animals').collection('animal')
}

async function addAnimal(animal) {
  const collection = await getCollection()
  return await collection.insertOne(animal)
}

async function deleteAnimal(id) {
  const collection = await getCollection()
  await collection.deleteOne({
    _id: ObjectID(id),
  })
}

async function listAnimals() {
  const collection = await getCollection()
  return collection.find().toArray()
}

module.exports = { addAnimal, deleteAnimal, listAnimals }
