
import { Authenticated } from '@/src/components/Authenticated';
import Users from '@/src/content/DashboardPages/AllUser';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'


const SmsUnverified = () => {
  return (
    <>
     <Users/>
    </>
  )
};

SmsUnverified.getLayout = (page) => (
  <Authenticated>
    <DashboardLayout>{page}</DashboardLayout>
  </Authenticated>
)

export default SmsUnverified
