import { Grid } from '@mui/material'
import React from 'react'
import LogoCard from '../../Dashboard/LogoFavicon/LogoCard'

const LogoFavicon = () => {
  return (
    <>
       <Grid item xs={12} sx={{margin:'30px'}}>
          <Grid
          sx={{marginTop:"20px"}}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item lg={12} sm={12} xs={12} >
             <LogoCard/>
            </Grid>

           
           
        </Grid>
        </Grid>
    </>
  )
}

export default LogoFavicon
