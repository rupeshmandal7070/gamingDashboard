import { Authenticated } from '@/src/components/Authenticated';
import HotNewCasino from '@/src/content/DashboardPages/FrontendManager/ManageSection/HotNewCasino';
import Licences from '@/src/content/DashboardPages/FrontendManager/ManageSection/Licences';


import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Template = () => {
  return (
    <>
 <Licences/>
  </>
)
};

Template.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Template