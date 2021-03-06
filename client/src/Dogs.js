import React, { useEffect, useState } from 'react'
import MyNavBar from './MyNavbar'
import './Dogs.css'
import { Button } from 'react-bootstrap'

export default function Dogs(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/listAnimals')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const deleteAnimal = async (animal) => {
    const id = animal._id

    try {
      console.log('Deleting animal ' + id)
      const response = await fetch(`/deleteAnimal?id=${id}`)
      const newData = data.filter((a) => a._id != id)
      console.log(newData)
      setData(newData)
    } catch (e) {
      console.log(e)
    }
  }
  const listAnimals = data
    ? data.map((animal) => (
        <>
          <img
            className="dog-imgs"
            style={{ width: '200px' }}
            src={animal.img}
          />

          <span className="dog-names-info">
            {animal.name}
            <br />
            {animal.info}
            <br />
            <Button onClick={() => deleteAnimal(animal)}>Delete</Button>
          </span>
        </>
      ))
    : null

  return (
    <div>
      <MyNavBar />
      <div className="dog-grid">
        {listAnimals ? listAnimals : <span>Loading...</span>}
      </div>
    </div>
  )
}
