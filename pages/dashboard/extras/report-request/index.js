import { Authenticated } from '@/src/components/Authenticated';
import EmailTemplate from '@/src/content/DashboardPages/EmailTemplate';
import ReportRequest from '@/src/content/DashboardPages/ReportRequest';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Cookie = () => {
  return (
    <>
     <ReportRequest/>
  </>
)
};

Cookie.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Cookie
