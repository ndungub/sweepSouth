import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    children: [
      {
        path: '',
        redirectTo: 'settings'
      },
	  {
        path: 'branches',
        loadChildren: () => import('./branches/branch.component.module').then(m => m.BranchInitModule),
        data: {
          title: 'Branches'
        }
      },
	  {
        path: 'userprofile',
        loadChildren: () => import('./userprofile/userprofile.component.module').then(m => m.UserProfileInitModule),
        data: {
          title: 'User Profile'
        }
      },
	  {
        path: 'user',
        loadChildren: () => import('./user/user.component.module').then(m => m.UserInitModule),
        data: {
          title: 'Users'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
