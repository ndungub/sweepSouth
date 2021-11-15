
import { AfterViewInit,Component,OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { RequestService } from '../../../../services/request-service';


import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import {ModalDirective} from 'ngx-bootstrap/modal';

import { LoaderService } from '../../../../services/loader.service';
import { GeneralFormsValidationService } from '../../../../services/validation.service';



@Component({
 
  templateUrl: 'userprofile.component.html',
  styleUrls: [
	'./userprofile.component.css',
	'../../../../scss/vendors/toastr/toastr.scss',
	'../../../../scss/vendors/spinner/spinner.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UseProfileComponent  implements AfterViewInit, OnInit {
  loading: boolean;  
  error: any;
  canEdit: boolean = false;
  isEditting: boolean = false;
  modalTitle: string = 'Add User Profile';

  profileForm: FormGroup;
  submitted = false;
  formErrors: any;

  private toasterService: ToasterService;

  @ViewChild('userprofileGrid') userprofileGrid: jqxGridComponent;
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
	this.requestService.returnPostWithoutBody('settings/userprofile').subscribe((v) => {
			 this.getUserProfiles(v.results);    
	});
  }

  ngAfterViewInit() {
	
	
  }

  createForm() {
    this.profileForm = this.formbuilder.group({
      profilename: ['', Validators.compose([
			Validators.required,
			Validators.minLength(2)
		])],
	  profiledesc: ['', Validators.compose([
			Validators.required,
			Validators.minLength(4)
		])],
	  profilestatus:[true],
    });
  }

 validation_messages = {
          'profilename': [
               { type: 'required', message: 'Profile name is required.' },
               { type: 'minlength', message: 'Profile name has to be atleast four characters long.' }
           ],
          'profiledesc': [
               { type: 'required', message: 'Profile description is required.' },
			   { type: 'minlength', message: 'Profile description has to be atleast four characters long.' }
           ]
 }

// convenience getter for easy access to form fields
  get f() { 
	return this.profileForm.controls; 
  }

  onNewProfile(){
		this.isEditting = false;
		this.profileForm.reset();
		this.largeModal.show()
  }

  onEditProfile(){
		this.isEditting = true;
		let rowIndex = this.userprofileGrid.getselectedrowindex();
		let rowData = this.userprofileGrid.getrowdata(rowIndex);
		
		this.profileForm.get('profilename').setValue(rowData.profilename);
		this.profileForm.get('profiledesc').setValue(rowData.profiledesc);
		this.profileForm.get('profilestatus').setValue((rowData.profilestatus == 1) ? true : false);
		
		this.modalTitle = 'Edit User Profile';
		this.largeModal.show()
  }
  onReset() {

    this.submitted = false;
    this.profileForm.reset();
	this.largeModal.hide()

  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }
	
	let data = this.profileForm.value;
	data['profilestatus'] = (data.profilestatus) ? 1 : 0;

	if(!this.isEditting){
		this.requestService.returnPostWithBody('settings/adduserprofile',data).subscribe((v) => {
			if(v.code == '000'){
				this.showToaster('success','Success',v.message);
			 	this.onReset();
			 	this.getUserProfiles(v.results);
			}else{
				this.showToaster('error','Error!',v.message);
			} 
		});
	}else{
		let rowIndex = this.userprofileGrid.getselectedrowindex();
		let rowData = this.userprofileGrid.getrowdata(rowIndex);
		
		data['profileid'] = rowData.profileid;
		
		this.requestService.returnPostWithBody('settings/edituserprofile',data).subscribe((v) => {
			if(v.code == '000'){
				 this.showToaster('success','Success',v.message);
				 this.onReset();
				 this.getUserProfiles(v.results);
			} else{
				this.showToaster('error','Error!',v.message);
			}  
		});
	}
	
  }
	
	public addUserProfile(){
		
		
	let data = {}
	let requestData = {data: data};
	
	

		
	}
	public showToaster(type:string,title:string,msg:string){
		this.toasterService.pop(type, title, msg);
	}
	
    showLoader(msg){
    	
    };

    public getUserProfiles(localdata: any){
			
		let source: any =
	    {
	        datatype: 'array',
	        datafields: [
				{ name: 'rownum', type: 'number' },
	            { name: 'profileid', type: 'int' },
	            { name: 'profilename', type: 'string' },
	            { name: 'profiledesc', type: 'string' },
				{ name: 'profilestatus', type: 'string' },
				{ name: 'profilestatusdesc', type: 'string' },
	            { name: 'createdon', type: 'string' },
	            { name: 'editedon', type: 'string' }
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
			{ text: 'Profile ID',  datafield: 'profileid', width: '5%' },
	        { text: 'Profile Name',  datafield: 'profilename', width: '20%'},
	        { text: 'Description',  datafield: 'profiledesc', width: '20%'},
			{ text: '',  datafield: 'profilestatus', width: '0'},
			{ text: 'Status',  datafield: 'profilestatusdesc', width: '10%'},
	        { text: 'Created On', datafield: 'createdon', width: '20%' },
	        { text: 'Edited On', datafield: 'editedon', width: '20%' }
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

		this.userprofileGrid.setOptions(settings);
		this.userprofileGrid.hidecolumn('profilestatus');
		this.userprofileGrid.hidecolumn('profileid')
		

    }

	rowSelect(event: any): void {
		let index  = this.userprofileGrid.getselectedrowindexes();
		
		if(index.length > 1){
			this.userprofileGrid.unselectrow(index[0]);
			this.userprofileGrid.hidecolumn('profilestatus')
			
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
