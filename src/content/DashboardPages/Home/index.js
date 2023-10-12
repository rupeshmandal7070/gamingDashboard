import { Grid } from '@mui/material'
import React from 'react'
import CashCard from '../../Dashboard/Home/CashCard'
import WelcomeCard from '../../Dashboard/Home/WelcomCard'
import SalesOverview from '../../Dashboard/Home/SalesOverviewCard'
import ActiveUserCard from '../../Dashboard/Home/ActiveUsersCard'
import Block8 from '../../Dashboard/Home/Projects'
import Block1 from '../../Dashboard/Home/OrderCard'
import TotalCard from '../../Dashboard/Home/TotalCard'
import User2Card from '../../Dashboard/Home/User2Card'
import User3Card from '../../Dashboard/Home/User3Card'
import User4Card from '../../Dashboard/Home/UserCard4'
import LeaguesCard from '../../Dashboard/Home/LeaguesCard'
import BetsCard from '../../Dashboard/Home/BetsCard'
import MatchCard from '../../Dashboard/Home/MatchCard'

const HomeDashboard = () => {
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
          sx={{marginTop:"20px"}}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item lg={3} sm={6} xs={12} >
              <CashCard/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <User2Card/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <User3Card/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <User4Card/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={5} lg={5} xs={12} >
         <WelcomeCard/>
        </Grid>

        <Grid item md={3} lg={3} xs={12} >
         <WelcomeCard/>
        </Grid>
        <Grid item md={4} lg={4} xs={12} >
         <WelcomeCard/>
        </Grid>

         <Grid item md={7} lg={7} xs={12} sx={{padding:'10px'}}>
         <SalesOverview/>
        </Grid>

        <Grid item md={5} lg={5} xs={12}>
         <ActiveUserCard/>
        </Grid>



        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item lg={3} sm={6} xs={12}>
              <TotalCard/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <LeaguesCard/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <BetsCard/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <MatchCard/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={8} lg={8} xs={12}>
         <Block8/>
        </Grid>

        <Grid item md={4} lg={4} xs={12}>
         <Block1/>
        </Grid>

        </Grid>
    </>
  )
}

export default HomeDashboard
