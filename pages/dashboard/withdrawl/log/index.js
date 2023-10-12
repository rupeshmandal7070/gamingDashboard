import { Authenticated } from '@/src/components/Authenticated';
import WithdrawlLog from '@/src/content/DashboardPages/WithdrawlLog';
// import WithdrawlMethod from '@/src/content/DashboardPages/WithdrawlMethods';

// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Logs = () => {
  return (
    <>
      <WithdrawlLog/>
  </>
)
};

Logs.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Logs
