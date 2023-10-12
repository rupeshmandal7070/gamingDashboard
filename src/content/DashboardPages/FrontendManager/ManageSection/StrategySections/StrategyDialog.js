import { Close } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const StrategyDialog = ({setOpen}) => {
    const handleClose = () => {
        setOpen(false)
      }
  return (
    <>
    <Box sx={{padding:'20px',width:'500px'}}>
           <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h4'>Add New Strategy Item</Typography>
            <Close onClick={handleClose} sx={{cursor:'pointer'}}/>
           </Box>

           <Box sx={{marginTop:'40px',display:'flex',flexDirection:'column',gap:'30px'}}>
              <Box>
                <Typography>Icon</Typography>
                <TextField variant='outlined' label='icon' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Heading</Typography>
                <TextField variant='outlined' label='heading' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Details</Typography>
                <TextField variant='outlined' label='Details' multiline rows={5} size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
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

export default StrategyDialog
