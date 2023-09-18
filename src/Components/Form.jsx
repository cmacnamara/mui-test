import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

const Form = ({ handleSubmit, handleChange, formData }) => {
  return (  
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '50%', mt: '2rem' }}
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
  )
}

export default Form;