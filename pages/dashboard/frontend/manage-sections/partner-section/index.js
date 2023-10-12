import { Authenticated } from '@/src/components/Authenticated';
import HotNewCasino from '@/src/content/DashboardPages/FrontendManager/ManageSection/HotNewCasino';
import PartnerSection from '@/src/content/DashboardPages/FrontendManager/ManageSection/PartnerSection';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
    <PartnerSection/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
