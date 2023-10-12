import { Authenticated } from '@/src/components/Authenticated';
// import ManagePages from '@/src/content/DashboardPages/ManagePages';
import ManagePromotion from '@/src/content/DashboardPages/ManagePromotions';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Promotion = () => {
  return (
    <>
      <ManagePromotion/>
  </>
)
};

Promotion.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Promotion
