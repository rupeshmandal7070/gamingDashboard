import { Authenticated } from '@/src/components/Authenticated';
import FaqSection from '@/src/content/DashboardPages/FrontendManager/ManageSection/FaqSection';
import FollowUs from '@/src/content/DashboardPages/FrontendManager/ManageSection/FollowUs';





import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
    <FollowUs/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
