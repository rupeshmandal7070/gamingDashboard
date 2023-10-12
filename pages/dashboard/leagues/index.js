import { Authenticated } from '@/src/components/Authenticated';
import Catogeries from '@/src/content/DashboardPages/ManageCategories';
import Leagues from '@/src/content/DashboardPages/ManageLeagues';
// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  League = () => {
  return (
    <>
      <Leagues/>
  </>
)
};

League.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default League
