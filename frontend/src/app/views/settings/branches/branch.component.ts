
import { AfterViewInit,Component,OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { RequestService } from '../../../../services/request-service';


import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import {ModalDirective} from 'ngx-bootstrap/modal';

import { LoaderService } from '../../../../services/loader.service';
import { GeneralFormsValidationService } from '../../../../services/validation.service';



@Component({
 
  templateUrl: 'branch.component.html',
  styleUrls: [
	'./branch.component.css',
	'../../../../scss/vendors/toastr/toastr.scss',
	'../../../../scss/vendors/spinner/spinner.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BranchComponent  implements AfterViewInit, OnInit {
  loading: boolean;  
  error: any;
  canEdit: boolean = false;
  isEditting: boolean = false;
  modalTitle: string = 'Add  Branch';

  branchForm: FormGroup;
  submitted = false;
  formErrors: any;

  private toasterService: ToasterService;

  @ViewChild('branchGrid') branchGrid: jqxGridComponent;
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
    	this.createForm();
		
  }

 ngOnInit() {
	this.requestService.returnPostWithoutBody('settings/branch').subscribe((v) => {
			 this.getBranchs(v.results);    
	});
  }

  ngAfterViewInit() {
	
	
  }

  createForm() {
    this.branchForm = this.formbuilder.group({
      branchname: ['', Validators.compose([
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
          'branchname': [
               { type: 'required', message: 'Branch name is required.' },
               { type: 'minlength', message: 'Branch name has to be atleast 2 characters long.' }
           ],
          'code': [
               { type: 'required', message: 'Branch code is required.' }
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
	return this.branchForm.controls; 
  }

  onNewBranch(){
		this.isEditting = false;
		this.branchForm.reset();
		this.largeModal.show()
  }

  onEditBranch(){
		this.isEditting = true;
		let rowIndex = this.branchGrid.getselectedrowindex();
		let rowData = this.branchGrid.getrowdata(rowIndex);
		
		this.branchForm.get('branchname').setValue(rowData.branchname);
		this.branchForm.get('code').setValue(rowData.code);
		this.branchForm.get('phoneno').setValue(rowData.phoneno);
		this.branchForm.get('address').setValue(rowData.address);
		this.branchForm.get('status').setValue((rowData.status == 1) ? true : false);
		
		this.modalTitle = 'Edit  Branch';
		this.largeModal.show()
  }
  onReset() {

    this.submitted = false;
    this.branchForm.reset();
	this.largeModal.hide()

  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.branchForm.invalid) {
		this.showToaster('error','Error!','Fill in all the required fields');
      	return;
    }
	
	let data = this.branchForm.value;
	data['status'] = (data.status) ? 1 : 0;
	
	
	if(!this.isEditting){
		this.requestService.returnPostWithBody('settings/addbranch',data).subscribe((v) => {
			if(v.code == '000'){
				this.showToaster('success','Success',v.message);
			 	this.onReset();
			 	this.getBranchs(v.results);
			}else{
				this.showToaster('error','Error!',v.message);
			}   
		});
	}else{
		let rowIndex = this.branchGrid.getselectedrowindex();
		let rowData = this.branchGrid.getrowdata(rowIndex);
		
		data['branchid'] = rowData.branchid;
		
		this.requestService.returnPostWithBody('settings/editbranch',data).subscribe((v) => {
			if(v.code == '000'){
				 this.showToaster('success','Success',v.message);
				 this.onReset();
				 this.getBranchs(v.results);
			} else{
				this.showToaster('error','Error!',v.message);
			}   
		});
	}
	
  }
	
	public addBranch(){
		
		
	let data = {}
	let requestData = {data: data};
	
	

		
	}
	public showToaster(type:string,title:string,msg:string){
		this.toasterService.pop(type, title, msg);
	}
	
    showLoader(msg){
    	
    };

    public getBranchs(localdata: any){
			
		let source: any =
	    {
	        datatype: 'array',
	        datafields: [
				{ name: 'rownum', type: 'number' },
	            { name: 'branchid', type: 'int' },
	            { name: 'branchname', type: 'string' },
	            { name: 'code', type: 'string' },
				{ name: 'address', type: 'string' },
				{ name: 'phoneno', type: 'string' },
				{ name: 'status', type: 'string' },
				{ name: 'statusdesc', type: 'string' }
	           
	        ],
	        localdata: localdata,
	    };
		//this.getWidth();
		
		let dataAdapter: any = new jqx.dataAdapter(source);
    	

		let columns: any[] =
	    [
	        {
						text: '#', sortable: false, filterable: false, editable: false,
						groupable: false, draggable: false, resizable: false,
						datafield: '', columntype: 'number', width: 50,
						cellsrenderer: function (row, column, value) {
							return "<div style='margin:4px;'>" + (value + 1) + "</div>";
						}
			},
			{ text: 'Branch ID',  datafield: 'branchid', width: '5%' },
	        { text: 'Branch Name',  datafield: 'branchname', width: '25%'},
	        { text: 'Code',  datafield: 'code', width: '10%'},
			{ text: 'Phone No',  datafield: 'phoneno', width: '10%'},
			{ text: 'Address',  datafield: 'address', width: '25%'},
			{ text: '',  datafield: 'status', width: '0'},
			{ text: 'Status',  datafield: 'statusdesc', width: '10%'}
	    ];

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

		this.branchGrid.setOptions(settings);
		this.branchGrid.hidecolumn('status');
		this.branchGrid.hidecolumn('branchid')
		

    }

	rowSelect(event: any): void {
		let index  = this.branchGrid.getselectedrowindexes();
		
		if(index.length > 1){
			this.branchGrid.unselectrow(index[0]);
			this.branchGrid.hidecolumn('branch_status')
			
		}
		
		this.canEdit = true;
		
        
    }

	rowUnSelect(event: any): void {
		this.canEdit = false;
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
