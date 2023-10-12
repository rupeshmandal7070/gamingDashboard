import { Notifications, Search, Settings } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const HeaderIcons = () => {
  return (
    <>

      <Box sx={{display:'flex',gap:'15px',alignItems:'center'}}>
    <Box sx={{display:'flex',alignItems:'center'}}>
        <Box sx={{border:'1px solid black',height:'35px',display:'flex',alignItems:'center',borderRadius:'10px 0px 0px 10px',width:'40px',justifyContent:'center'}}>
           <Search/>
        </Box>
        <input style={{width:'200px',border:'1px solid black',height:'35px',borderRadius:'0px 10px 10px 0px',background:'transparent'}}
        placeholder='Search here'
        />
    </Box>
        <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
        <Avatar sx={{ width: 24, height: 24 }}/>
        <Typography sx={{fontSize:'18px',fontWeight:'600'}}>Signin</Typography>

        </Box>
         <Settings/>
         <Notifications/>
      </Box>
    </>
  )
}

export default HeaderIcons
