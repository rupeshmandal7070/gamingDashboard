import { Authenticated } from '@/src/components/Authenticated';

import DepositsMoney from '@/src/content/DashboardPages/Deposit';

// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Deposits = () => {
  return (
    <>
      <DepositsMoney/>
  </>
)
};

Deposits.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Deposits
