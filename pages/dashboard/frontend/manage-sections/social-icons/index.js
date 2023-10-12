import { Authenticated } from '@/src/components/Authenticated';
import HotNewCasino from '@/src/content/DashboardPages/FrontendManager/ManageSection/HotNewCasino';
import SocialIcons from '@/src/content/DashboardPages/FrontendManager/ManageSection/SocialIcons';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
  <SocialIcons/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
