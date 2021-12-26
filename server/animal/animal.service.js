const mongoose = require('mongoose')

const addAnimal = (Animal) => (img, name, info) => {
  if (!img || !name || !info)
    throw new Error(
      'Missing Data. Please provide values for img, name, and info.'
    )
  const animal = new Animal({ img, name, info })
  return animal.save()
}

const listAnimals = (Animal) => () => {
  return Animal.find({})
}

const deleteAnimal = (Animal) => (id) => {
  Animal.deleteOne({ _id: mongoose.Types.ObjectId(id) })
}

module.exports = (Animal) => {
  return {
    addAnimal: addAnimal(Animal),
    listAnimals: listAnimals(Animal),
    deleteAnimal: deleteAnimal(Animal),
  }
}
