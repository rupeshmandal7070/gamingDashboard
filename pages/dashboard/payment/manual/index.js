import { Authenticated } from '@/src/components/Authenticated';
import AutomaticGateways from '@/src/content/DashboardPages/Automatic';
import Catogeries from '@/src/content/DashboardPages/ManageCategories';
import Leagues from '@/src/content/DashboardPages/ManageLeagues';
import ManualGateways from '@/src/content/DashboardPages/Manual';
// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Manual = () => {
  return (
    <>
      <ManualGateways/>
  </>
)
};

Manual.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Manual
