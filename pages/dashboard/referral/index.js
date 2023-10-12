import { Authenticated } from '@/src/components/Authenticated';
import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const Referral = () => {
  return (
    <>
      <ReferralCard/>
  </>
)
};

Referral.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Referral
