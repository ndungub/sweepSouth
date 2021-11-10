import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Menus'
  },
  {
    name: 'Settings',
    url: '/settings',
    children: [
      {
        name: 'Branches',
        url: '/settings/branches',
        icon: 'icon-puzzle'
      },
	  {
        name: 'User Profile',
        url: '/settings/userprofile',
        icon: 'icon-puzzle'
      },
      {
        name: 'Users',
        url: '/settings/user',
        icon: 'icon-user'
      }
	]
  },  
  {
    name: 'Quotes',
    url: '/quotes',
    children: [
	  {
        name: 'Quotes',
        url: '/quotes/quotes',
        icon: 'icon-puzzle'
      }
	]
  }
  
];
