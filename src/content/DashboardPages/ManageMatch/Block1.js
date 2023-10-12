import { Close } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Block1 = ({setOpen}) => {

    const handleClose = () => {
        setOpen(false)
      }
  return (
    <>
      <Box sx={{padding:'20px',width:'500px'}}>
           <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h4'>Add New Match</Typography>
            <Close onClick={handleClose} sx={{cursor:'pointer'}}/>
           </Box>

           <Box sx={{marginTop:'40px',display:'flex',flexDirection:'column',gap:'30px'}}>
              <Box>
                <Typography>Select League</Typography>
                <TextField variant='outlined' label='select league' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Match Title</Typography>
                <TextField variant='outlined' label='select league' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Betting Start From</Typography>
                <TextField variant='outlined' label='select league' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Box>
                <Typography>Bettings End At</Typography>
                <TextField variant='outlined' label='select league' size='small' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
              </Box>

              <Button variant='contained' sx={{width:'100%',borderRadius:'4px'}}>Submit</Button>
           </Box>
      </Box>
    </>
  )
}

export default Block1
