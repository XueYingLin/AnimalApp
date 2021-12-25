import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyNavBar.css'
import About from './About'

export default function MyNavBar() {
  return (
    <Navbar className="header" bg="light" expand="lg">
      <Nav.Link href="/">Home</Nav.Link>

      <Nav.Link href="/dogs">Dogs</Nav.Link>
      <Nav.Link href="/cats">Cats</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>

      <Nav.Link href="/login/signup">Login/Signup</Nav.Link>
    </Navbar>
  )
}
