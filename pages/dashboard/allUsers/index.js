
import { Authenticated } from '@/src/components/Authenticated';
import Users from '@/src/content/DashboardPages/AllUser';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'


const Allusers = () => {
  return (
    <>
     <Users/>
    </>
  )
};

Allusers.getLayout = (page) => (
  <Authenticated>
    <DashboardLayout>{page}</DashboardLayout>
  </Authenticated>
)

export default Allusers
