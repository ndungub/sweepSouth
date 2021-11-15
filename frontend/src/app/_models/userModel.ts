export class UserModel {
	userid: number;
    username: string;
	email: string;
	fullname: string;
	pwd: string;
	mobileno: string;
	profileid: number;
	idtype: number;
	idno: string;
	status: number;
	createdon: string;
	editedon: string;
	loginattempt: number;
	lastpwdchange: string;
	access_type: string;
	countrydetails: string;
	isauthorized: number;
    profilename: string;
	branchid: number;
	accessbranch:string;
    jwtToken?: string;
}

export class UserProfile {
    constructor(
 		public profileid: number,
        public profilename: string,
		public profiledesc: string,
		public createdon: string,
		public editedon: string
    ){}
}


export class Branch {
    constructor(
 		public branchid: number,
        public branchname: string,
		public code: string,
		public branchdesc: string,
		public status: string,
		public address: string,
		public phoneno: string,
		public createdby: string,
		public editedby: string,
		public createdon: string,
		public editedon: string
    ){}
}



export class AccessBranch {
    constructor(
 		public accessbranchid: number,
        public userid: string,
		public username: string,
		public fullname: string,
		public branchid: string,
		public branchname: string,
		public createdby: string,
		public editedby: string,
		public createdon: string,
		public editedon: string
    ){}
}


