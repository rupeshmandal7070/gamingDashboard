import { Authenticated } from '@/src/components/Authenticated';
import WithdrawlMethod from '@/src/content/DashboardPages/WithdrawlMethods';

// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Methods = () => {
  return (
    <>
      <WithdrawlMethod/>
  </>
)
};

Methods.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Methods
