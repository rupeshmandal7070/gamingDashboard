import { Authenticated } from '@/src/components/Authenticated';
import GlobalTemplate from '@/src/content/DashboardPages/GlobalTemplate';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Global = () => {
  return (
    <>
      <GlobalTemplate/>
  </>
)
};

Global.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Global
