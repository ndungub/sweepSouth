
import { AfterViewInit,Component,OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { RequestService } from '../../../../services/request-service';


import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import {ModalDirective} from 'ngx-bootstrap/modal';

import { LoaderService } from '../../../../services/loader.service';
import { GeneralFormsValidationService } from '../../../../services/validation.service';
import * as _ from 'lodash';



@Component({
 
  templateUrl: 'quotes.component.html',
  styleUrls: [
	'./quotes.component.css',
	'../../../../scss/vendors/toastr/toastr.scss',
	'../../../../scss/vendors/spinner/spinner.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuotesComponent  implements AfterViewInit, OnInit {
  loading: boolean;  
  error: any;
  canEdit: boolean = false;
  isEditting: boolean = false;
  modalTitle: string = 'Add  Quotes';

  quotesForm: FormGroup;
  submitted = false;
  formErrors: any;

  private toasterService: ToasterService;

  @ViewChild('quotesGrid') quotesGrid: jqxGridComponent;
  @ViewChild('largeModal', {static: false}) public largeModal: ModalDirective;

  public toasterconfig: ToasterConfig =
    new ToasterConfig({
      tapToDismiss: true,
      timeout: 2000
   });
  
  constructor(private loaderService: LoaderService,
			   public requestService: RequestService,
			   toasterService: ToasterService,
			   private formbuilder: FormBuilder,
			   public gvf: GeneralFormsValidationService) {
				
		this.toasterService = toasterService;
		this.loaderService.isLoading.subscribe((v) => {
		      console.log(v);
		      this.loading = v;
		 });
	
		this.formErrors = this.gvf.errorMessages;
    	//this.createForm();
		
  }

 ngOnInit() {
	this.filterQuotes('US');
  }

  ngAfterViewInit() {
	
	
  }

  createForm() {
    this.quotesForm = this.formbuilder.group({
      quotesname: ['', Validators.compose([
			Validators.required,
			Validators.minLength(2)
		])],
	  code: ['', [Validators.required]],
	  phoneno: ['', [Validators.required]],
	  address: ['', [Validators.required]],
	  status:[true],
    });
  }

 validation_messages = {
          'quotesname': [
               { type: 'required', message: 'Quotes name is required.' },
               { type: 'minlength', message: 'Quotes name has to be atleast 2 characters long.' }
           ],
          'code': [
               { type: 'required', message: 'Quotes code is required.' }
           ],
          'phoneno': [
               { type: 'required', message: 'Phone number is required.' }
           ],
          'address': [
               { type: 'required', message: 'Address is required.' }
           ]
 }

// convenience getter for easy access to form fields
  get f() { 
	return this.quotesForm.controls; 
  }
   
   public filterQuotes(region: string){
		let data = {'region': region};
		
		this.requestService.returnPostWithBody('api/viewquote',data).subscribe((v) => {
			let response = v.results;
			
			for(let i in response){
				let resp = response[i];
				
				resp = _.merge(response[i],resp.results);
			}
			response = _.omit(response, ['results']);
			
			this.getQuotes(response);    
		});
	}

   public getQuotes(localdata: any){
		let dafafileds = new Array();
		let columns = new Array();;
		

		for(let key in localdata[0]){
			if(key != 'results'){
				let datafield = { name: key, type: 'string' };
				
				let colName = key.replace(/([A-Z])/g, ' $1').trim();
				colName = colName.charAt(0).toUpperCase() + colName.slice(1);
				
				let column = { text: colName,  datafield: key, width: '15%' };
				
				dafafileds.push(datafield);
				columns.push(column);
			}
		}
			
		let source: any =
	    {
	        datatype: 'array',
	        datafields: dafafileds,
	        localdata: localdata,
	    };
		//this.getWidth();
		
		let dataAdapter: any = new jqx.dataAdapter(source);
    	

		//let columns: any[] = datacolumns;

		 let settings = {
			source: dataAdapter,
			width: '100%',
	        pageable: true,
	        autoheight: true,
	        sortable: true,
	        altrows: true,
	        enabletooltips: true,
			pagesize: 10,
			filterable: true,
			selectionmode: 'checkbox',
			columnsresize: true,
	        columns: columns			
		}

		this.quotesGrid.setOptions(settings);
		this.quotesGrid.hidecolumn('id');

    }

	rowSelect(event: any): void {
		let index  = this.quotesGrid.getselectedrowindexes();
		
		if(index.length > 1){
			this.quotesGrid.unselectrow(index[0]);
			this.quotesGrid.hidecolumn('quotes_status')
			
		}
		
		this.canEdit = true;
		
        
    }

	rowUnSelect(event: any): void {
		this.canEdit = false;
	}
	
	
  	public showToaster(type:string,title:string,msg:string){
		this.toasterService.pop(type, title, msg);
	}

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  public getDate(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: '2-digit'});
  }
}
