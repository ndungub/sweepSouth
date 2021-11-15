import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { ShareService } from './share.service';

@Injectable({ providedIn: 'root' })
export class DataService {
	constructor(
        private http: HttpClient,
		public shareService:ShareService
    ) {
       
    }

    public getCategories(categoryid:number): Observable<any[]>{
		const httpOptions = {
			 headers: new HttpHeaders({
				  'Content-Type': 'application/json'
			 }),
			 //withCredentials: true
		};
		let params = {};
		if(categoryid != 0){
			params = {categoryid: categoryid};
		}

    	return this.http.post<any[]>(`${environment.apiUrl}/general/category`, params, httpOptions);
    }


    getSubCategories(categoryid:number,subcategoryid:number) : Observable<any[]>{
		const httpOptions = {
			 headers: new HttpHeaders({
				  'Content-Type': 'application/json'
			 }),
			 //withCredentials: true
		};
		let params = {};
		if(subcategoryid != 0){
			params = {categoryid: categoryid,subcategoryid: subcategoryid};
		}else{
			params = {categoryid: categoryid};
		}

        return this.http.post<any>(`${environment.apiUrl}/general/subcategory`, params, httpOptions)
            
    }

	
	
}