export class AuthModel {
    constructor(
        public code: string,
        public msg: string,
		public userProfile: UserProfile,
        public users: User 
    ){}
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
export class User {
    constructor(
 		public userid: number,
        public username: string,
		public email: string,
		public fullname: string,
		public pwd: string,
		public mobileno: string,
		public profileid: number,
		public idtype: number,
		public idno: string,
		public status: number,
		public created_on: string,
		public edited_on: string,
		public loginattempt: number,
		public lastpwdchange: string,
		public access_type: string,
		public countrydetails: string,
		public isauthorized: number
    ){}
}

