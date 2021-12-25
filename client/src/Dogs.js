import React from 'react'
import MyNavBar from './MyNavbar'
import './Dogs.css'

export default function Dogs(props) {
  const dogs = [
    {
      img: 'dog1.jpg',
      name: 'Cookie',
      info: `4 months old, He has been staying at our center for a couple of months. He is very healthy. He is very nice and kids friendly. `,
    },
    {
      img: 'dog2.jpg',
      name: 'Zora',
      info: '2 years old. He has been staying at our center for a couple of months. He is very healthy. He is very nice and kids friendly.',
    },
    {
      img: 'dog3.jpg',
      name: 'Richie',
      info: '1 year old. He has been staying at our center for a couple of months. He is very healthy. He is very nice and kids friendly.',
    },
  ]

  const listDogs = dogs.map((dog) => (
    <>
      <img className="dog-imgs" style={{ width: '200px' }} src={dog.img} />

      <span className="dog-names-info">
        {dog.name}
        <br />
        {dog.info}
      </span>
    </>
  ))

  return (
    <div>
      <MyNavBar />
      <div className="dog-grid">{listDogs}</div>
    </div>
  )
}
