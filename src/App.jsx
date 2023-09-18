import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '50%' }}
      >
        <Paper sx={{ width: '100%' }}>
          <List>
            <ListItem>
              <ListItemText
                primary={`${display.firstName} ${display.lastName}`} 
                secondary="Name"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary={`${display.email}`} 
                secondary="Email"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary={`${display.location}`} 
                secondary="Location"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '50%' }}
      >
        <Paper elevation={4} sx={{ width: "100%", p: "1rem" }}>
          <form onSubmit={handleSubmit}>
            <TextField 
              type='text'
              name='firstName'
              label='First Name'
              value={formData.firstName}
              onChange={handleChange}
              autoComplete='off'
              margin='normal'
              fullWidth
              required
            />
            <TextField 
              type='text'
              name='lastName'
              label='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              autoComplete='off'
              margin='normal'
              fullWidth
              required
            />
            <TextField 
              type='text'
              name='email'
              label='Email'
              value={formData.email}
              onChange={handleChange}
              autoComplete='off'
              margin='normal'
              fullWidth
              required
            />
            <TextField 
              type='text'
              name='location'
              label='Location'
              value={formData.location}
              onChange={handleChange}
              autoComplete='off'
              margin='normal'
              fullWidth
              required
            />
            <Button type="submit" variant='contained' fullWidth>
              Submit 
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  )
}

export default App
