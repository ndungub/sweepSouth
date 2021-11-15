// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components Routing
import { QuotesRoutingModule } from './quotes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuotesRoutingModule
  ]
})
export class QuotesModule { }

