import { Authenticated } from '@/src/components/Authenticated';
import LogoFavicon from '@/src/content/DashboardPages/LogoFavicon';
// import GeneralSetting from '@/src/content/DashboardPages/GeneralSetting';

import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Logoicon = () => {
  return (
    <>
      <LogoFavicon/>
  </>
)
};

Logoicon.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Logoicon
