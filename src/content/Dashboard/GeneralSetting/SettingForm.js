import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Switch1 from './Switch1'

const SettingForm = () => {
  return (
    <>
        <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
           <Grid item xs={12}>
          <Grid
          
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item lg={3} sm={6} xs={12} >
                <Box>
              <Typography variant='h5'>Site Title</Typography>
             <TextField variant='outlined' label='Site Title' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <Box>
              <Typography variant='h5'>Currency</Typography>
             <TextField variant='outlined' label='Currency' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <Box>
              <Typography variant='h5'>Currency Symbol</Typography>
             <TextField variant='outlined' label='Currency Symbol' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <Box>
              <Typography variant='h5'>Time Zone</Typography>
             <TextField variant='outlined' label='Time Zone' sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>
          </Grid>
        </Grid>


            <Grid item lg={4} sm={6} xs={12}>
            <Box>
              <Typography variant='h5'>Site Base Color</Typography>
             <TextField variant='outlined'  sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>

            <Grid item lg={4} sm={6} xs={12}>
            <Box>
              <Typography variant='h5'>Bet Min Limit</Typography>
             <TextField variant='outlined'  sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>

            <Grid item lg={4} sm={6} xs={12}>
            <Box>
              <Typography variant='h5'>Bet Max Limit</Typography>
             <TextField variant='outlined'  sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>

            <Grid item lg={6} sm={12} xs={12}>
            <Box>
              <Typography variant='h5'>Withdraw Min Limit</Typography>
             <TextField variant='outlined'  sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>

            <Grid item lg={6} sm={12} xs={12}>
            <Box>
              <Typography variant='h5'>Withdraw Max Limit</Typography>
             <TextField variant='outlined'  sx={{width:'100%','& fieldset':{borderRadius:'4px'}}}/>
                </Box>
            </Grid>
           
            <Grid item lg={3} sm={6} xs={12}>
                <Box>
                <Typography variant='h5'>Withdraw Max Limit</Typography>
                <Switch1/>
                </Box>
            </Grid>

            <Grid item lg={3} sm={6} xs={12}>
            <Box>
                <Typography variant='h5'>Agree Policy</Typography>
                <Switch1/>
                </Box>
            </Grid>

            <Grid item lg={3} sm={6} xs={12}>
            <Box>
                <Typography variant='h5'>User Registration</Typography>
                <Switch1/>
                </Box>
            </Grid>

            <Grid item lg={3} sm={6} xs={12}>
            <Box>
                <Typography variant='h5'>SMS Verification</Typography>
                <Switch1/>
                </Box>
            </Grid>

            <Grid item lg={3} sm={6} xs={12}>
            <Box>
                <Typography variant='h5'>SMS Verification</Typography>
                <Switch1/>
                </Box>
            </Grid>

            <Grid item lg={3} sm={6} xs={12}>
            <Box>
                <Typography variant='h5'>SMS Verification</Typography>
                <Switch1/>
                </Box>
            </Grid>


            <Grid item lg={3} sm={6} xs={12}>
            <Box>
                <Typography variant='h5'>SMS Verification</Typography>
                <Switch1/>
                </Box>
            </Grid>


            <Grid item lg={3} sm={6} xs={12}>
            <Box>
                <Typography variant='h5'>SMS Verification</Typography>
                <Switch1/>
                </Box>
            </Grid>

            <Grid item lg={3} sm={6} xs={12}>
            <Box>
                <Typography variant='h5'>SMS Verification</Typography>
                <Switch1/>
                </Box>
            </Grid>

            <Grid item lg={12} sm={12} xs={12}>
           <Button variant='contained' sx={{width:'100%'}}>Update</Button>
            </Grid>

      </Grid>
    </>
  )
}

export default SettingForm
