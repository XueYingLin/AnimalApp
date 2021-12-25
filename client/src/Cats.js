import React from 'react'
import MyNavBar from './MyNavbar'
import './Cats.css'

export default function Cats() {
  const cats = [
    {
      img: 'cat1.jpg',
      name: 'Cat',
      info: `4 months old, He has been staying at our center for a couple of months. He is very healthy. He is very nice and kids friendly. `,
    },
    {
      img: 'cat2.jpg',
      name: 'Cutie',
      info: `4 months old, He has been staying at our center for a couple of months. He is very healthy. He is very nice and kids friendly. `,
    },
    {
      img: 'cat3.jpg',
      name: 'Cay',
      info: `4 months old, He has been staying at our center for a couple of months. He is very healthy. He is very nice and kids friendly. `,
    },
  ]

  const listCats = cats.map((cat) => (
    <>
      <img className="cat-imgs" style={{ width: '200px' }} src={cat.img} />

      <span className="cat-names-info">
        {cat.name}
        <br />
        {cat.info}
      </span>
    </>
  ))

  return (
    <div>
      <MyNavBar />
      <div className="cat-grid">{listCats}</div>
    </div>
  )
}
