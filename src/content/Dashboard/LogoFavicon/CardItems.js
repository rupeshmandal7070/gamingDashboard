import { Button, Grid } from '@mui/material'
import React from 'react'
import IconCard from './IconCard'

const CardItems = () => {
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
            spacing={3}
          >
            <Grid item lg={3} sm={3} xs={12} >
             <IconCard/>
            </Grid>

            <Grid item lg={3} sm={3} xs={12} >
            <IconCard/>
            </Grid>

            <Grid item lg={3} sm={3} xs={12} >
            <IconCard/>
            </Grid>

            <Grid item lg={3} sm={3} xs={12} >
            <IconCard/>
            </Grid>
           
        </Grid>

       </Grid>

       <Grid item lg={6} sm={6} xs={12} >
            <Button variant='contained' sx={{width:'100%'}}>Select Logo</Button>
            </Grid>

            <Grid item lg={6} sm={6} xs={12} >
            <Button variant='contained' sx={{width:'100%'}}>Select Favicon</Button>
            </Grid>

            <Grid item lg={12} sm={12} xs={12} >
            <Button variant='contained' sx={{width:'100%'}}>Update</Button>
            </Grid>
        </Grid>
    </>
  )
}

export default CardItems
