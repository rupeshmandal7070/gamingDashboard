import { Authenticated } from '@/src/components/Authenticated';
import SupportTicket from '@/src/content/DashboardPages/SupportTicket';

// import ReferralCard from '@/src/content/DashboardPages/ManageReferral';
import DashboardLayout from '@/src/layouts/dashboard';
import React from 'react'

const Tickets = () => {
  return (
    <>
      <SupportTicket/>
  </>
)
};

Tickets.getLayout = (page) => (
<Authenticated>
  <DashboardLayout>{page}</DashboardLayout>
</Authenticated>
)

export default Tickets
