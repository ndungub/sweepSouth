import { NgModule,NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';


import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { RequestService } from '../../../../services/request-service';
// Toastr
import { ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

// Ng2-select
import { SelectModule } from 'ng-select';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



import { LoaderService } from '../../../../services/loader.service';
import { LoaderInterceptor } from '../../../../services/interceptors/loader-interceptor.service';

import { GeneralFormsValidationService } from '../../../../services/validation.service';

import { UserComponent } from './user.component';

// Routing
import { UserRoutingModule } from './user-routing.module';
//
@NgModule({
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    FormsModule,
	ReactiveFormsModule,
    HttpClientModule,
    jqxGridModule,
	ToasterModule,
	SelectModule,
	BsDropdownModule,
	ModalModule.forRoot()
  ],
  declarations: [
    UserComponent,
	DataFilterPipe
  ],providers: [
	RequestService,
	ToasterService,
	LoaderService,
	GeneralFormsValidationService,
	{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
 
})
export class UserInitModule { }
