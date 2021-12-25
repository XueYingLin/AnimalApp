import './App.css'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import MyNavbar from './MyNavbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dogs from './Dogs'
import Home from './Home'
import Cats from './Cats'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/cats" element={<Cats />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
