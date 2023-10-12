import { Authenticated } from '@/src/components/Authenticated';

// import BlogSection from '@/src/content/DashboardPages/FrontendManager/ManageSection/BlogSection';
import ContactUs from '@/src/content/DashboardPages/FrontendManager/ManageSection/ContactUs';
import CounterSection from '@/src/content/DashboardPages/FrontendManager/ManageSection/CounterSection';



import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
     <CounterSection/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
