import { Authenticated } from '@/src/components/Authenticated';
import Catogeries from '@/src/content/DashboardPages/ManageCategories';
// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Manage = () => {
  return (
    <>
      <Catogeries/>
  </>
)
};

Manage.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Manage
