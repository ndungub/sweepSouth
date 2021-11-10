import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quotes Data'
    },
    children: [
      {
        path: '',
        redirectTo: 'quotes'
      },
	  {
        path: 'quotes',
        loadChildren: () => import('./quotes/quotes.component.module').then(m => m.QuotesInitModule),
        data: {
          title: 'Quotes'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule {}
