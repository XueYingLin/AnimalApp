const addAnimal = (Dog) => (img, name, info) => {
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

module.exports = (Animal) => {
  return {
    addAnimal: addAnimal(Animal),
    listDogs: listAnimals(Animal),
  }
}
