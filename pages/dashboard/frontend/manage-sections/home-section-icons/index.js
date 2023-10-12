import { Authenticated } from '@/src/components/Authenticated';
import HeaderNavIcon from '@/src/content/DashboardPages/FrontendManager/ManageSection/HeaderNavIcons';
import HomeSectionIcon from '@/src/content/DashboardPages/FrontendManager/ManageSection/HomeSectionIcons';

import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
   <HomeSectionIcon/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
