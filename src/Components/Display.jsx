import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import ListItemIcon from '@mui/material/ListItemIcon'

const Display = ({ display }) => {
  return (  
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{ width: '50%' }}
  >
    <Paper sx={{ width: '100%' }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText
            primary={`${display.firstName} ${display.lastName}`} 
            secondary="Name"
          />
        </ListItem>
        <Divider />
        <ListItem>
        <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText
            primary={`${display.email}`} 
            secondary="Email"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText
            primary={`${display.location}`} 
            secondary="Location"
          />
        </ListItem>
      </List>
    </Paper>
  </Box>
  )
}

export default Display;