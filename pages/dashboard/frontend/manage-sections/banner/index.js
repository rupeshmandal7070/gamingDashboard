import { Authenticated } from '@/src/components/Authenticated';
import BannerSection from '@/src/content/DashboardPages/FrontendManager/ManageSection/BannerSection';
// import EmailTemplate from '@/src/content/DashboardPages/EmailTemplate';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
     <BannerSection/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
