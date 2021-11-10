import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from 'app/_helpers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },

  {
    path: '',
    component: DefaultLayoutComponent,
	canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./views/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'quotes',
        loadChildren: () => import('./views/quotes/quotes.module').then(m => m.QuotesModule)
      }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
