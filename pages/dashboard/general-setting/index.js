import { Authenticated } from '@/src/components/Authenticated';
import GeneralSetting from '@/src/content/DashboardPages/GeneralSetting';

import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Settings = () => {
  return (
    <>
      <GeneralSetting/>
  </>
)
};

Settings.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Settings
