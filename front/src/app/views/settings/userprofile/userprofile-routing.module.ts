import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UseProfileComponent } from './userprofile.component';

const routes: Routes = [
  {
    path: '',
    component: UseProfileComponent,
    data: {
      title: 'User Profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {}
