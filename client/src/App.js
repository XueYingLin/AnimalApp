import './App.css'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function App() {
  const [imgs, setImgs] = useState(null)

  useEffect(() => {
    fetch('/dogs')
      .then((res) => res.json())
      .then((imgs) => setImgs(imgs.names))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src="dogs.gif" />
        <p>Pick an animal you like.</p>
        <div className="button">
          <Button onClick={() => alert('Hello')}>Dogs</Button>
          <Button>Cats</Button>
          {/* <img>{!imgs ? 'No images' : imgs}</img> */}
        </div>
        <p>Welcome to our animal site!</p>
      </header>
    </div>
  )
}

export default App
