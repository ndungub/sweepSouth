
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
	created_on: string;
	edited_on: string;
	loginattempt: number;
	lastpwdchange: string;
	access_type: string;
	countrydetails: string;
	isauthorized: number;
	userProfile: UserProfile
    jwtToken?: string;
}

export class UserProfile {
    constructor(
 		public profileid: number,
        public profilename: string,
		public profile_desc: string,
		public created_on: string,
		public edited_on: string
    ){}
}