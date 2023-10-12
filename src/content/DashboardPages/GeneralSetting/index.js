import { Grid } from '@mui/material'
import React from 'react'
import SettingCard from '../../Dashboard/GeneralSetting/SettingCard'

const GeneralSetting = () => {
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
              <SettingCard/>
            </Grid>
           
        </Grid>
        </Grid>
    </>
  )
}

export default GeneralSetting
