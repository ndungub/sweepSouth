import { Injectable } from '@angular/core';
import { UserModel } from 'app/_models';
import { UserProfile } from 'app/_models';
import { DefinationModel } from 'app/_models';
import { MiscModel } from 'app/_models';
import { Branch } from 'app/_models';
import { AccessBranch } from 'app/_models';


@Injectable()
export class ShareService {
	private _currentUserItem:UserModel;
	private _currentuser:number;
	
	private _DefinationItem:DefinationModel;
	private _MiscItem:MiscModel;
	private _UserItem:UserModel;
	private _UserProfileItem:UserProfile;
	private _BranchItem:Branch;
	private _AccessBranchItem:AccessBranch;
	
	private _shareItem:IShareOption;
	

	setCurrentUserItems(item: UserModel) {
        this._currentUserItem= item;
    }
 
    getCurrentUserItems(): UserModel {
        return this._currentUserItem;
    }

	setCurrentUser(currentuser: number) {
        this._currentuser = currentuser;
    }
 
    getCurrentUser(): number {
        return this._currentuser;
    }

	setDefinationItems(item: DefinationModel) {
        this._DefinationItem= item;
    }
 
    getDefinationItems(): DefinationModel {
        return this._DefinationItem;
    }

	setMiscItems(item: MiscModel) {
        this._MiscItem = item;
    }
 
    getMiscItems(): MiscModel {
        return this._MiscItem;
    }

	setUserItems(item: UserModel) {
        this._UserItem= item;
    }
 
    getUserItems(): UserModel {
        return this._UserItem;
    }

	setUserProfileItems(item: UserProfile) {
        this._UserProfileItem= item;
    }
 
    getUserProfileItems(): UserProfile {
        return this._UserProfileItem;
    }

	setBranchItems(item: Branch) {
        this._BranchItem= item;
    }
 
    getBranchItems(): Branch {
        return this._BranchItem;
    }

	setAccessBranchItems(item: AccessBranch) {
        this._AccessBranchItem = item;
    }
 
    getAccessBranchItems(): AccessBranch {
        return this._AccessBranchItem;
    }

	setItem(item: IShareOption) {
        this._shareItem= item;
    }
 
    getItems(): IShareOption {
        return this._shareItem;
    }
	
}

export interface IShareOption {
    value: string;
    text: string;
    isactive?: boolean;
}

