import { Authenticated } from '@/src/components/Authenticated';
import ExtensionPage from '@/src/content/DashboardPages/ExtensionsPage';
import ManageMatch from '@/src/content/DashboardPages/ManageMatch';
// import GeneralSetting from '@/src/content/DashboardPages/GeneralSetting';

import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Matches = () => {
  return (
    <>
      <ManageMatch/>
  </>
)
};

Matches.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Matches
