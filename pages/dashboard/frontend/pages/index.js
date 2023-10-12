import { Authenticated } from '@/src/components/Authenticated';
import ManagePages from '@/src/content/DashboardPages/ManagePages';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Pages = () => {
  return (
    <>
      <ManagePages/>
  </>
)
};

Pages.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Pages
