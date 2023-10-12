import { Authenticated } from '@/src/components/Authenticated';
import SubscribersPage from '@/src/content/DashboardPages/Subscriber';

// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const Subscribers = () => {
  return (
    <>
      <SubscribersPage/>
  </>
)
};

Subscribers.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Subscribers
