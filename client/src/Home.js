import './App.css'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import MyNavbar from './MyNavbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <MyNavbar />
      <img src="dogs.gif" />
      <div className="button"></div>
      <p>Welcome to our animal site!</p>
    </div>
  )
}
