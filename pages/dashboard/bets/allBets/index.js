import { Authenticated } from '@/src/components/Authenticated';
import Bets from '@/src/content/DashboardPages/Bets';

// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Allbets = () => {
  return (
    <>
      <Bets/>
  </>
)
};

Allbets.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Allbets
