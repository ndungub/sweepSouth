export class DefinationModel {
    constructor(
 		public id: number,
        public name: string,
		public skey: string,
		public isactive: number,
        public isvisible: number,
		public createdon: string,
		public editedon: string
    ){}
}

export class MiscModel {
    [x: string]: any;
    constructor(
 		public id: number,
        public name: string,
		public skey: string,
		public definationname: string,
		public definationskey: string,
		public parentid: number,
		public settings: number,
		public isactive: number,
        public isvisible: number,
		public createdon: string,
		public editedon: string
    ){}
}