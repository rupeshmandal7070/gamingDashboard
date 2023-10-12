import { Authenticated } from '@/src/components/Authenticated';
import HotNewCasino from '@/src/content/DashboardPages/FrontendManager/ManageSection/HotNewCasino';
import StrategySections from '@/src/content/DashboardPages/FrontendManager/ManageSection/StrategySections';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
  <StrategySections/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
