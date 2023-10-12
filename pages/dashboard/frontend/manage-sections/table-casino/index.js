import { Authenticated } from '@/src/components/Authenticated';
import HotNewCasino from '@/src/content/DashboardPages/FrontendManager/ManageSection/HotNewCasino';
import TableCasino from '@/src/content/DashboardPages/FrontendManager/ManageSection/TableCasino';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
    <TableCasino/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template
