import { Authenticated } from '@/src/components/Authenticated';
import EmailTemplate from '@/src/content/DashboardPages/EmailTemplate';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
      <EmailTemplate/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
