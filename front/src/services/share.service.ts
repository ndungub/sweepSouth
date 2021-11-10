import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
	private _shareItem:Array<IShareOption> = [];
	private _miscItem:Array<IMiscOption> = [];
	
	
	setItem(item: IShareOption) {
        this._shareItem.push(item);
    }
 
    getItems(): IShareOption[] {
        return this._shareItem;
    }

	setMiscItem(item: IMiscOption) {
        this._miscItem.push(item);
    }
 
    getMiscItems(): IMiscOption[] {
        return this._miscItem;
    }
	
}
export interface IShareOption {
    value: string;
    text: string;
    isactive?: boolean;
}

export interface IMiscOption {
    id: string;
    name: string;
	parentid: string;
	skey: string;
    isactive?: boolean;
}