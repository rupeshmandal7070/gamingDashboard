import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        name: 'Dashboard',
        icon: BackupTableTwoToneIcon,
        link: '/dashboard',
        
      },

      {
        name: 'Manage Users',
        icon: SmartToyTwoToneIcon,
        link: '/dashboard/allUsers',
        
        items: [
          {
            name: 'All Users',
            link: '/dashboard/allUsers',
          },
       
          {
            name: 'Email to All',
            link: '/dashboards/banking'
          },
         

        ]
      },

      {
        name: 'Manage Referral',
        icon: BackupTableTwoToneIcon,
        link: '/dashboard/referral',
        
      },

      {
        name: 'Manage Categories',
        icon: BackupTableTwoToneIcon,
        link: '/dashboard/categories',
        
      },

      {
        name: 'Manage Leagues',
        icon: BackupTableTwoToneIcon,
        link: '/dashboard/leagues',
        
      },
      {
        name: 'Manage Match',
        icon: BackupTableTwoToneIcon,
        link: '/dashboard/matches',
        
      },
      {
        name: 'Bets',
        icon: HealthAndSafetyTwoToneIcon,
        badge: '',
        
        badgeTooltip: 'Tokyo 3.0 contains over 250 new data display blocks',
        items: [
          {
            name: 'All Bets',
            link: '/dashboard/bets/allBets'
          },
        
   
        ]
      },

      {
        name: 'Make Winner',
        icon: BackupTableTwoToneIcon,
        link: '/dashboard/winner',
        
      },
      {
        name: 'Payment Gateways',
        
        icon: AnalyticsTwoToneIcon,
        items: [
          {
            name: 'Automatic Gateways',
            link: '/dashboard/payment/automatic'
          },
          {
            name: 'Manual Gateways',
            link: '/dashboard/payment/manual'
          },
         
       
        ]
      },

      {
        name: 'Deposits',
        icon: HealthAndSafetyTwoToneIcon,
        badge: '',
        link: '/dashboard/deposits',
        badgeTooltip: 'Tokyo 3.0 contains over 250 new data display blocks',
      
      },

      {
        name: 'Withdrawl',
        icon: HealthAndSafetyTwoToneIcon,
        badge: '',
        link: '/dashboard/withdrawl/methods',
        badgeTooltip: 'Tokyo 3.0 contains over 250 new data display blocks',
      
      },

      {
        name: 'Support Tickets',
        icon: HealthAndSafetyTwoToneIcon,
        badge: '',
        link: '/dashboard/tickets',
        badgeTooltip: 'Tokyo 3.0 contains over 250 new data display blocks',
      
      },

      {
        name: 'Reports',
        icon: HealthAndSafetyTwoToneIcon,
        badge: '',
        link: '/dashboard/report',
        badgeTooltip: 'Tokyo 3.0 contains over 250 new data display blocks',
      
      },

      {
        name: 'Subscribers',
        icon: HealthAndSafetyTwoToneIcon,
        badge: '',
        link: '/dashboard/subscriber',
        badgeTooltip: 'Tokyo 3.0 contains over 250 new data display blocks',
      
      },
    ]
  },
  {
    heading: 'Settings',
    items: [
      {
        name: 'General Setting',
        icon: AssignmentIndTwoToneIcon,
        link: '/dashboard/general-setting',
   
      },
      {
        name: 'Logo & Favicon',
        link: '/dashboard/logo-icon',
        icon: AccountTreeTwoToneIcon
      },
      {
        name: 'Etensions',
        icon: StorefrontTwoToneIcon,
        link: '/dashboard/extensions',
   
      },
      {
        name: 'Languages',
        link: '/dashboard/language',
        icon: ReceiptTwoToneIcon,
      
      },

      {
        name: 'SEO Manager',
        link: '/management/invoices',
        icon: ReceiptTwoToneIcon,
      
      },

      
      {
        name: 'Email Manager',
        link: '/dashboard/email/global',
        icon: ReceiptTwoToneIcon,
      
      },

      
      {
        name: 'SMS Manager',
        link: '/dashboard/sms/template',
        icon: ReceiptTwoToneIcon,
      
      },
    ]
  },
  {
    heading: 'Frontend Manager',
    items: [
      {
        name: 'Manage Template',
        link: '/management/invoices',
        icon: VpnKeyTwoToneIcon,
      
      },
      {
        name: 'Manage Pages',
        link: '/dashboard/frontend/pages',
        icon: VpnKeyTwoToneIcon,
      
      },

      {
        name: 'Manage Promotions',
        link: '/dashboard/frontend/promotions',
        icon: VpnKeyTwoToneIcon,
      
      },

      {
        name: 'Manage Sections',
       
        icon: VpnKeyTwoToneIcon,
        items: [
          {
            name: 'About Us',
            link: '/dashboard/payment/automatic'
          },
          {
            name: 'Auth Page',
            link: '/dashboard/payment/manual'
          },
          {
            name: 'Banner Section',
            link: '/dashboard/frontend/manage-sections/banner'
          },
          {
            name: 'Banner Marquee Test',
            link: '/dashboard/payment/manual'
          },
          {
            name: 'Blog Section',
            link: '/dashboard/frontend/manage-sections/blog'
          },
          {
            name: 'Contact Us',
            link: '/dashboard/frontend/manage-sections/contact'
          },
          {
            name: 'Counter Section',
            link: '/dashboard/frontend/manage-sections/counter'
          },
          {
            name: 'FAQ Section',
            link: '/dashboard/frontend/manage-sections/faq-section'
          },
          {
            name: 'Feature Section',
            link: '/dashboard/frontend/manage-sections/feature'
          },
          {
            name: 'Follow Us',
            link: '/dashboard/frontend/manage-sections/followus'
          },
          {
            name: 'Copyright',
            link: '/dashboard/frontend/manage-sections/contact'
          },
          {
            name: 'Header Nav Icons',
            link: '/dashboard/frontend/manage-sections/header-nav-icons'
          },
          {
            name: 'Home Section Icons',
            link: '/dashboard/frontend/manage-sections/home-section-icons'
          },
          {
            name: 'Hot & New Casino',
            link: '/dashboard/frontend/manage-sections/hot-new-casino'
          },
          {
            name: 'Licences Info',
            link: '/dashboard/frontend/manage-sections/licence-info'
          },
          {
            name: 'Licences',
            link: '/dashboard/frontend/manage-sections/licences'
          },
          {
            name: 'Login Register Section',
            link: '/dashboard/frontend/manage-sections/login-register'
          },
          {
            name: 'Loyalty',
            link: '/dashboard/frontend/manage-sections/loyalty'
          },
          {
            name: 'Partner Section',
            link: '/dashboard/frontend/manage-sections/partner-section'
          },
          {
            name: 'Payment Methods',
            link: '/dashboard/frontend/manage-sections/payment-methods'
          },
          {
            name: 'Policy Pages',
            link: '/dashboard/frontend/manage-sections/policy-pages'
          },
          {
            name: 'Provider',
            link: '/dashboard/frontend/manage-sections/provider'
          },
          {
            name: 'Affiliate Section',
            link: '/dashboard/frontend/manage-sections/affiliate-section'
          },
          {
            name: 'Slot Game',
            link: '/dashboard/frontend/manage-sections/slot-games'
          },
          {
            name: 'Social Icons',
            link: '/dashboard/frontend/manage-sections/social-icons'
          },
          {
            name: 'Strategy Section',
            link: '/dashboard/frontend/manage-sections/strategy-section'
          },
          {
            name: 'Table Casino',
            link: '/dashboard/frontend/manage-sections/table-casino'
          },
       
        ]
      
      },
      
    ]
  },
  {
    heading: 'Extra',
    items: [
      {
        name: 'GDPR Cookie',
        link: '/dashboard/extras/cookie',
        icon: DesignServicesTwoToneIcon
      },
      {
        name: 'System Information',
        icon: SupportTwoToneIcon,
        link: '/dashboard/extras/system-info',
      },
      {
        name: 'Custom Css',
        icon: SupportTwoToneIcon,
        link: '/dashboard/extras/custom-css',
      },
      {
        name: 'Clear Cache',
        icon: SupportTwoToneIcon,
        link: '/dashboard/extras/clear-cache',
      },
      {
        name: 'Report & Request',
        icon: SupportTwoToneIcon,
        link: '/dashboard/extras/report-request',
      },
    ]
  }
];

export default menuItems;
