import { Authenticated } from '@/src/components/Authenticated'
import HomeDashboard from '@/src/content/DashboardPages/Home'
import DashboardLayout from '@/src/layouts/dashboard'
import React from 'react'


const Dashboard = () => {
  return (
    <>
      {/* <DashboardLayout/> */}
      <HomeDashboard/>
    </>
  )
};

Dashboard.getLayout = (page) => (
  <Authenticated>
    <DashboardLayout>{page}</DashboardLayout>
  </Authenticated>
)

export default Dashboard
