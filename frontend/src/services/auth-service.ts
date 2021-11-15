import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthModel } from '../../model/authModel';
import { RequestModel } from '../../model/requestModel';




//Import RxJs required methods
import {Observable} from 'rxjs/Rx';
import CryptoJS from 'crypto-js';
import { map, catchError, tap } from 'rxjs/operators';


let apiUrl = 'http://127.0.0.1:5000/';
//let apiUrl = 'https://catalog.imab.ke/';

@Injectable()
export class AuthService {
  constructor(public http: HttpClient) {
	 
  }
  
returnWithBody (uri: string,body: {}): Observable<AuthModel> {
	  const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

      return this.http.get<AuthModel>(uri, {'headers': headers })
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

returnWithoutBody (uri: string): Observable<AuthModel> {
	  const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

      return this.http.get<AuthModel>(uri, {'headers': headers })
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

      return this.http.get<AuthModel>('https://jsonplaceholder.typicode.com/comments', {'headers': headers })
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
  
  
  encryptSalt (toEncrypt: string) : Object {
		  "use strict";
		      let salt = CryptoJS.lib.WordArray.random(128 / 8);
		      let key256Bits500Iterations = CryptoJS.PBKDF2("Secret Passphrase", salt, { keySize: 256 / 32, iterations: 500 });
		      let iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f'); // just chosen for an example, usually random as well

		      let encrypted = CryptoJS.AES.encrypt(toEncrypt, key256Bits500Iterations, { iv: iv });
		      let data_base64 = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
		      let iv_base64 = encrypted.iv.toString(CryptoJS.enc.Base64);
		      let key_base64 = encrypted.key.toString(CryptoJS.enc.Base64);

		      data_base64 = encodeURIComponent(data_base64).replace(/[!'()]/g,'').replace(/\*/g, "%2A");
		      iv_base64 = encodeURIComponent(iv_base64).replace(/[!'()]/g,'').replace(/\*/g, "%2A");
		      key_base64 = encodeURIComponent(key_base64).replace(/[!'()]/g,'').replace(/\*/g, "%2A");

		      
		      let data = {};
		      data['encrypted'] = data_base64;
		      data['iv'] = iv_base64;
		      data['key'] = key_base64;

		      return data;
		 
	  
  };

}
