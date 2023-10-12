import { Close } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const SocialDialog = ({setOpen}) => {
    const handleClose = () => {
        setOpen(false)
      }
  return (
    <>
    <Box sx={{padding:'20px',width:'500px'}}>
           <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h4'>Add New Social Icon Item</Typography>
            <Close onClick={handleClose} sx={{cursor:'pointer'}}/>
           </Box>

           <Box sx={{marginTop:'40px',display:'flex',flexDirection:'column',gap:'30px'}}>
              <Box>
                <Typography>Title</Typography>
                <TextField variant='outlined' label='title' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Social Icon</Typography>
                <TextField variant='outlined' label='icon' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              
              <Box>
                <Typography>url</Typography>
                <TextField variant='outlined' label='url' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>
            

              <Box sx={{display:'flex',gap:'20px'}}>
              <Button onClick={handleClose} size='small' variant='contained' sx={{borderRadius:'4px'}}>Close</Button>
              <Button variant='contained' size='small' sx={{borderRadius:'4px'}}>Save</Button>
              </Box>

           </Box>
      </Box>
    </>
  )
}

export default SocialDialog
