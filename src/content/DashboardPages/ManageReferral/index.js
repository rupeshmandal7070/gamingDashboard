import React from 'react'
import DepositCard from '../../Dashboard/Referral/DepositCard'
import { Box, Grid, Typography } from '@mui/material'
import PlaceCard from '../../Dashboard/Referral/PlaceCard'
import WinCard from '../../Dashboard/Referral/WinCard'

const ReferralCard = () => {
  return (
    <>
    <Box sx={{marginLeft:'35px',marginTop:'30px'}}>
      <Typography sx={{fontSize:'25px',fontWeight:'600'}}>Manage Referral</Typography>
    </Box>
    
       <Grid
        sx={{ px: 4,marginTop:'0px' }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >

         <Grid item md={4} lg={4} xs={12} >
         <DepositCard/>
        </Grid>

        <Grid item md={4} lg={4} xs={12} >
         <PlaceCard/>
        </Grid>

        <Grid item md={4} lg={4} xs={12} >
         <WinCard/>
        </Grid>

      </Grid>
    </>
  )
}

export default ReferralCard
