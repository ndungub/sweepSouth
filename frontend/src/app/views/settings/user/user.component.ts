
import { AfterViewInit,Component,OnInit, ViewChild  } from '@angular/core';
import {IOption} from 'ng-select';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import {ModalDirective} from 'ngx-bootstrap/modal';

import { RequestService } from '../../../../services/request-service';
import { LoaderService } from '../../../../services/loader.service';
import { GeneralFormsValidationService } from '../../../../services/validation.service';


import { ShareService } from 'app/_services';
import { UserProfile } from 'app/_models';
import { MiscModel } from 'app/_models';
import { Branch } from 'app/_models';


import * as _ from 'lodash';


import { Country } from '../../../components/models/country/country.model';
import { PhoneValidator } from '../../../components/validators/phone.validator';

@Component({
  templateUrl: 'user.component.html',
  styleUrls: [
	'./user.component.css',
	'../../../../scss/vendors/toastr/toastr.scss',
	'../../../../scss/vendors/spinner/spinner.scss',
	'../../../../scss/vendors/ng-select/ng-select.scss']
})
export class UserComponent  implements AfterViewInit, OnInit {
  loading: boolean;  
  error: any;
  canEdit: boolean = false;
  canResetPwd: boolean = false;
  canLoginAttempt: boolean = false;
  isEditting: boolean = false;
  modalTitle: string = 'Add User';

  userForm: FormGroup;
  submitted = false;
  formErrors: any;

  private toasterService: ToasterService;
  public phoneMask = [];
  countries: Array<Country>;
  selectedCountry : any;

  @ViewChild('userGrid') userGrid: jqxGridComponent;
  @ViewChild('largeModal', {static: false}) public largeModal: ModalDirective;
  @ViewChild('userAccessBranchModal', {static: false}) public userAccessBranchModal: ModalDirective;


  // ng2-select
  public branches:Branch;
  public accessbranches:Array<IOption> = [];
  public idtypes:Array<MiscModel> = [];
  public accesstypes:Array<MiscModel> = [];
  public profiles:UserProfile;
   

  

  public selectedaccessbranches: Array<string> = [];
  public selectedRow: any;

  public toasterconfig: ToasterConfig =
    new ToasterConfig({
      tapToDismiss: true,
      timeout: 2000
   });

  constructor(private loaderService: LoaderService,
			   public requestService: RequestService,
			   toasterService: ToasterService,
			   private formbuilder: FormBuilder,
			   public gvf: GeneralFormsValidationService,
			   private shareService:ShareService,) {
				
			
			this.branches = this.shareService.getBranchItems();

			for(const k in this.branches){
				let branch:any = this.branches[k];
				this.accessbranches.push({label: branch.branchname, value: branch.branchid});
			}
			
			this.idtypes = _.filter(this.shareService.getMiscItems(), ['definationskey', 'idtype']);
			this.accesstypes = _.filter(this.shareService.getMiscItems(), ['definationskey', 'accesstype']);
			this.profiles = this.shareService.getUserProfileItems();
			
			this.toasterService = toasterService;
			this.loaderService.isLoading.subscribe((v) => {
			      console.log(v);
			      this.loading = v;
			 });
		
			this.countries = [
	            new Country('KE', 'Kenya'),
				new Country('UG', 'Uganda')
   			 ];
		
			this.formErrors = this.gvf.errorMessages;
	    	this.createForm();
  }

   ngOnInit() {
	this.requestService.returnPostWithoutBody('settings/user').subscribe((v) => {
			 this.getUsers(v.results);    
	});
  }

  ngAfterViewInit() {

	
  }

  createForm() {
	let country = new FormControl(this.countries[0], Validators.required);
	
    this.userForm = this.formbuilder.group({
      username: ['', Validators.compose([
			Validators.required,
			Validators.minLength(4)
		])],
	  fullname: ['', Validators.compose([
			Validators.required,
			Validators.minLength(4)
		])],
	  email: ['', Validators.compose([
      	Validators.required,
      	Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
	  country: country,
	  mobileno: [undefined, Validators.compose([
      	Validators.required,
      	PhoneValidator.validCountryPhone(country)
      ])],
	  profileid: ['', [Validators.required]],
	  idtype: ['', [Validators.required]],
	  idno: ['', Validators.compose([
			Validators.required,
			Validators.minLength(4)
		])],
	  access_type: ['', [Validators.required]],
	  branchid: ['', [Validators.required]],
	  status:[true],
    });
  }

  

 validation_messages = {
          'username': [
               { type: 'required', message: 'Username is required.' },
               { type: 'minlength', message: 'Username has to be atleast four characters long.' }
           ],
          'fullname': [
               { type: 'required', message: 'Full is required.' },
			   { type: 'minlength', message: 'Full Name has to be atleast four characters long.' }
           ],
		   'mobileno': [
               { type: 'required', message: 'Mobile Number is required.' },
               { type: 'validCountryPhone', message: 'Mobile Number incorrect for the country selected' }
           ],
          'email': [
               { type: 'required', message: 'Email is required.' },
               { type: 'pattern', message: 'Email format is not valid.' }
           ],
          'idtype': [
               { type: 'required', message: 'ID Type is required.' }
           ],
		   'idno': [
               { type: 'required', message: 'ID No is required.' },
			   { type: 'minlength', message: 'ID No has to be atleast four characters long.' }
           ],
          'profileid': [
               { type: 'required', message: 'Profile is required.' }
           ],
          'branchid': [
               { type: 'required', message: 'Branch is required.' }
           ],
          'access_type': [
               { type: 'required', message: 'Access Type is required.' }
           ]
  }

// convenience getter for easy access to form fields
  get f() { 
	return this.userForm.controls; 
  }



  onNewUser(){
		this.isEditting = false;
		this.userForm.reset();
		
		this.largeModal.show();
  }

  onEditUser(){
		this.isEditting = true;
		let rowIndex = this.userGrid.getselectedrowindex();
		let rowData = this.userGrid.getrowdata(rowIndex);
		
		this.userForm.get('username').setValue(rowData.username);
		this.userForm.get('fullname').setValue(rowData.fullname);
		this.userForm.get('status').setValue((rowData.status == 1) ? true : false);
		
		this.modalTitle = 'Edit User';
		this.largeModal.show()
  }
  onReset() {

    this.submitted = false;
    this.userForm.reset();
	this.largeModal.hide()

  }

onResetBranches(){
	this.userAccessBranchModal.hide()
}
  
 resetForm(){
	Object.keys(this.userForm.controls).forEach(
      field => {
         this.userForm.get(field).setErrors(null);
      }
    );
}
createUserAccessBranchForm(rowData:any){
	 
	
	this.userAccessBranchModal.show();
	this.selectedRow = rowData;
	this.selectedaccessbranches = rowData.accessbranch.split(',');
 }

  onSubmit() {

    this.submitted = true;
	let messages = this.validation_messages;
	for (let pet in messages) {
	    let msg = messages[pet];
		for (let m in msg) {
			let x = msg[m]
		}
	}


    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
	
	let data = this.userForm.value;
	data['branchid'] = this.userForm.controls.branchid.value.value;
	data['profileid'] = this.userForm.controls.profileid.value.value;
	data['idtype'] = this.userForm.controls.idtype.value.value;
	data['accessbranch'] = this.selectedaccessbranches.join(',');
	data['access_type'] = this.userForm.controls.access_type.value.value;
	data['status'] = (data.status) ? 1 : 0;
	
	if(this.isEditting){
		let rowIndex = this.userGrid.getselectedrowindex();
		let rowData = this.userGrid.getrowdata(rowIndex);
		
		data['userid'] = rowData.userid;
	}
	
	if(!this.isEditting){
		this.requestService.returnPostWithBody('settings/adduser',data).subscribe((v) => {
			 if(v.code == '000'){
				this.showToaster('success','Success',v.message);
			 	this.onReset();
			 	this.getUsers(v.results);
			}else{
				this.showToaster('error','Error!',v.message);
			}
			     
		});
	}else{
		this.requestService.returnPostWithBody('settings/edituser',data).subscribe((v) => {
			 if(v.code == '000'){
				 this.showToaster('success','Success',v.message);
				 this.onReset();
				 this.getUsers(v.results);
			} else{
				this.showToaster('error','Error!',v.message);
			}  
		});
	}
	
  }
   onSubmitAccessBranches(){
		let data = {};
		data['userid'] = this.selectedRow.userid;
		data['branchid'] = this.selectedaccessbranches.join(',');
		data['createdby'] = this.shareService.getCurrentUser();
		
		this.requestService.returnPostWithBody('settings/addaccessbranch',data).subscribe((v) => {
			 if(v.code == '000'){
				
				
				let accessbranch:any = v.results;
				accessbranch = _.map(accessbranch, 'branchid');
				
				this.userGrid.setcellvalue(this.selectedRow.boundindex,'accessbranch',accessbranch.join(','));
				
				this.showToaster('success','Success',v.message);
			 	this.onResetBranches();
				
			 	
			}else{
				this.showToaster('error','Error!',v.message);
			}
			     
		});
   }
	
	public addUser(){
		
		
	let data = {}
	let requestData = {data: data};
	
	

		
	}
	public showToaster(type:string,title:string,msg:string){
		this.toasterService.pop(type, title, msg);
	}
	
    showLoader(msg){
    	
    };

    public getUsers(localdata: any){
			
		let source: any =
	    {
	        datatype: 'array',
	        datafields: [
				{ name: 'rownum', type: 'number' },
	            { name: 'userid', type: 'int' },
	            { name: 'username', type: 'string' },
	            { name: 'email', type: 'string' },
				{ name: 'fullname', type: 'string' },
				{ name: 'mobileno', type: 'string' },
				{ name: 'profileid', type: 'int' },
				{ name: 'profilename', type: 'string' },
				{ name: 'idtype', type: 'int' },
				{ name: 'idtypename', type: 'string' },
				{ name: 'idno', type: 'string' },
				{ name: 'branchid', type: 'number' },
				{ name: 'branchname', type: 'string' },
				{ name: 'status', type: 'int' },
				{ name: 'userstatus', type: 'string' },
				{ name: 'loginattempt', type: 'string' },
				{ name: 'createdon', type: 'string' },
				{ name: 'editedon', type: 'string' },
				{ name: 'lastpwdchanges', type: 'string' },
				{ name: 'access_type', type: 'string' },
				{ name: 'isauthorized', type: 'int' },
				{ name: 'isauthorizeddesc', type: 'string' },
				{ name: 'accessbranch', type: 'string' }
				

	        ],
	        localdata: localdata,
	    };
		//this.getWidth();
		
		let dataAdapter: any = new jqx.dataAdapter(source);
    	let _self = this;

		let columns: any[] =
	    [
	        {
						text: '#', sortable: false, filterable: false, editable: false,
						groupable: false, draggable: false, resizable: false,
						datafield: '', columntype: 'number', width: 50,
						cellsrenderer: function (row, column, value) {
							return "<div style='margin:4px;'>" + (value + 1) + "</div>";
						}
			},{text: '', datafield: 'subcategory', columntype: 'button', width: '12%', filterable: false, cellsrenderer: function () {
              return 'Assign Access Branches'
	            }, buttonclick: function (rowIndex) {
					 let rowData = _self.userGrid.getrowdata(rowIndex);
					 _self.createUserAccessBranchForm(rowData);
				}
			},
			{ text: '',  datafield: 'userid', width: '1%' },
	        { text: 'User Name',  datafield: 'username', width: '10%'},
	        { text: 'Full Names',  datafield: 'fullname', width: '20%'},
			{ text: 'Email',  datafield: 'email', width: '10%'},
			{ text: 'Mobile No',  datafield: 'mobileno', width: '10%'},
			{ text: '',  datafield: 'profileid', width: '0'},
			{ text: 'Profile Name',  datafield: 'profilename', width: '10%'},
			{ text: '',  datafield: 'idtype', width: '0'},
			{ text: 'ID Type',  datafield: 'idtypename', width: '10%'},
			{ text: 'ID No',  datafield: 'idno', width: '10%'},
			{ text: '',  datafield: 'branchid'},
			{ text: 'Branch Name',  datafield: 'branchname', width: '10%'},
			{ text: '',  datafield: 'status', width: '0%'},
			{ text: 'is Active?',  datafield: 'userstatus', width: '6%'},
			{ text: 'Login Attempt',  datafield: 'loginattempt', width: '8%'},
			{ text: 'Last Pwd Change', datafield: 'lastpwdchanges', width: '10%' },
			{ text: 'Access Type', datafield: 'access_type', width: '8%' },
			{ text: '',  datafield: 'isauthorized', width: '0%'},
			{ text: 'is Authorized',  datafield: 'isauthorizeddesc', width: '10%'},
			{ text: 'Created On', datafield: 'createdon', width: '12%' },
	        { text: 'Edited On', datafield: 'editedon', width: '12%' },
			{ text: '', datafield: 'accessbranch' }
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

		this.userGrid.setOptions(settings);
		this.userGrid.hidecolumn('userid');
		this.userGrid.hidecolumn('profileid');
		this.userGrid.hidecolumn('branchid');
		this.userGrid.hidecolumn('idtype');
		this.userGrid.hidecolumn('status');
		this.userGrid.hidecolumn('isauthorized');
		this.userGrid.hidecolumn('accessbranch');
		

    }

	rowSelect(event: any): void {
		let index  = this.userGrid.getselectedrowindexes();
		let rowIndex = this.userGrid.getselectedrowindex();
		let rowData = this.userGrid.getrowdata(rowIndex);
		
		if(index.length > 1){
			this.userGrid.unselectrow(index[0]);
			
		}
		
		if(rowData.isauthorized == 0){
			this.canResetPwd = false;
		}else{
			this.canResetPwd = true;
		}
		
		
		
		this.canEdit = true;
		
        
    }

	rowUnSelect(event: any): void {
		this.canEdit = false;
	}
	
	
  countryChange(evt:any) {
	if(evt != null){
		this.selectedCountry = evt;
	    this.phoneMask = evt.phone_mask;
	}
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
