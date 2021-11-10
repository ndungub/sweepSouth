// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components Routing
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
