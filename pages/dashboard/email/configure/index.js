import { Authenticated } from '@/src/components/Authenticated';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Configure = () => {
  return (
    <>
      {/* <ExtensionPage/> */}
  </>
)
};

Configure.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Configure
