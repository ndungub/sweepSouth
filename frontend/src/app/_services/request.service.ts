import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestModel } from 'app/_models';
import { environment } from 'environments/environment';


@Injectable({ providedIn: 'root' })
export class RequestService {
	constructor(
        private http: HttpClient
    ) {
       
    }

	returnPostWithBody (uri: string,param:any): Observable<RequestModel>{
		  const httpOptions = {
			 headers: new HttpHeaders({
				  'Content-Type': 'application/json'
			 }),
			 //withCredentials: true
		   };
			
		  uri = `${environment.apiUrl}/`+ uri;
	
	      return this.http.post<RequestModel>(uri, param, httpOptions);
	};
	
	returnPostWithoutBody (uri: string): Observable<RequestModel>{
		  const httpOptions = {
			 headers: new HttpHeaders({
				  'Content-Type': 'application/json'
			 }),
			 //withCredentials: true
		   };

		  uri = `${environment.apiUrl}/`+ uri;
	      return this.http.post<RequestModel>(uri, {}, httpOptions);
	};
	
}
