import { Authenticated } from '@/src/components/Authenticated';
import MakeWinners from '@/src/content/DashboardPages/MakeWinner';

// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const Report = () => {
  return (
    <>
      <MakeWinners/>
  </>
)
};

Report.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Report
