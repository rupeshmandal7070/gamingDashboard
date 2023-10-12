import { Authenticated } from '@/src/components/Authenticated';
import FaqSection from '@/src/content/DashboardPages/FrontendManager/ManageSection/FaqSection';
import FeatureSection from '@/src/content/DashboardPages/FrontendManager/ManageSection/FeatureSection';





import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
    <FeatureSection/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
