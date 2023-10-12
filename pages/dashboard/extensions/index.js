import { Authenticated } from '@/src/components/Authenticated';
import ExtensionPage from '@/src/content/DashboardPages/ExtensionsPage';
// import GeneralSetting from '@/src/content/DashboardPages/GeneralSetting';

import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Extensions = () => {
  return (
    <>
      <ExtensionPage/>
  </>
)
};

Extensions.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Extensions
