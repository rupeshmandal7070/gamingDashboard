import { Close } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const PolicyDialog = ({setOpen}) => {
    const handleClose = () => {
        setOpen(false)
      }
  return (
    <>
    <Box sx={{padding:'20px',width:'500px'}}>
           <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h4'>Add New Policy pages Item</Typography>
            <Close onClick={handleClose} sx={{cursor:'pointer'}}/>
           </Box>

           <Box sx={{marginTop:'40px',display:'flex',flexDirection:'column',gap:'30px'}}>
              <Box>
                <Typography>Title</Typography>
                <TextField variant='outlined' label='Title' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Detail</Typography>
                <TextField variant='outlined' label='Detail' multiline rows={6} size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
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

export default PolicyDialog
