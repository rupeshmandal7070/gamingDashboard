import { Authenticated } from '@/src/components/Authenticated';
import MakeWinners from '@/src/content/DashboardPages/MakeWinner';

// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Winner = () => {
  return (
    <>
      <MakeWinners/>
  </>
)
};

Winner.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Winner
