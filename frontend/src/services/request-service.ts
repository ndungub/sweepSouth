import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestModel } from '../../model/requestModel';




//Import RxJs required methods
import {Observable} from 'rxjs/Rx';
import CryptoJS from 'crypto-js';
import { map, catchError, tap } from 'rxjs/operators';


let apiUrl = 'http://127.0.0.1:5001/';
//let apiUrl = 'https://catalog.imab.ke/';

@Injectable()
export class RequestService {
  constructor(public http: HttpClient) {
	 
  }
  
returnPostWithoutBody (uri: string): Observable<RequestModel> {
	  const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

      return this.http.post<RequestModel>(apiUrl+uri,{'headers': headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
};

returnPostWithBody (uri: string,body: any): Observable<RequestModel> {
	  const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

      return this.http.post<RequestModel>(apiUrl+uri,body,{'headers': headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
};

returnGetWithHeaders (uri: string,body: any): Observable<RequestModel> {
	  const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

      return this.http.get<RequestModel>(apiUrl+uri)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
};

returnGetWithoutBody (uri: string): Observable<RequestModel> {
	  const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
	  

      return this.http.post<RequestModel>(apiUrl+uri, {'headers': headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
};

returnTestBody (uri:string) {
	  const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

      return this.http.get<RequestModel>('https://jsonplaceholder.typicode.com/comments', {'headers': headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )

      
};
  
  


}
