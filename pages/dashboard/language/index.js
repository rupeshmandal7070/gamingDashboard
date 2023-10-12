import { Authenticated } from '@/src/components/Authenticated';
import ExtensionPage from '@/src/content/DashboardPages/ExtensionsPage';
import LanguagePage from '@/src/content/DashboardPages/LanguagePage/Index';
// import GeneralSetting from '@/src/content/DashboardPages/GeneralSetting';

import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const  Language = () => {
  return (
    <>
      <LanguagePage/>
  </>
)
};

Language.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Language
