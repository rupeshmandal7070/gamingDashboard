import { Close } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AffiliateDialog = ({setOpen}) => {
    const handleClose = () => {
        setOpen(false)
      }
  return (
    <>
    <Box sx={{padding:'20px',width:'500px'}}>
           <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h4'>Add New Banner Item</Typography>
            <Close onClick={handleClose} sx={{cursor:'pointer'}}/>
           </Box>

           <Box sx={{marginTop:'40px',display:'flex',flexDirection:'column',gap:'30px'}}>
              <Box>
                <Typography>Level No</Typography>
                <TextField variant='outlined' label='Level No' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Percentage</Typography>
                <TextField variant='outlined' label='Percentage' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Details</Typography>
                <TextField variant='outlined' label='Details' size='small' multiline rows={5} sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
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

export default AffiliateDialog
