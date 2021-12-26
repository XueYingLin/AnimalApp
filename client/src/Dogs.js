import React, { useEffect, useState } from 'react'
import MyNavBar from './MyNavbar'
import './Dogs.css'

export default function Dogs(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/listAnimals')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

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
