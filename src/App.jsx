// npm packages
import { useState, useEffect } from 'react'

// Components
import Form from './Components/Form'
import Display from './Components/Display'

// CSS
import './App.css'

function App() {
  
  const [display, setDisplay] = useState({
    firstName: 'random',
    lastName: 'name',
    email: 'randomname@gmail.com',
    location: 'Seattle',
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
  })

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setDisplay(formData)
  }

  useEffect(() => {
    console.log(display);
  }, [display])

  return (
    <div className='App'>
      <Display display={display} />
      <Form 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  )
}

export default App
