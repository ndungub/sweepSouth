import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { UserModel } from 'app/_models';
import { ShareService } from './share.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<UserModel>;
    public user: Observable<UserModel>;

    constructor(
        private router: Router,
        private http: HttpClient,
		public shareService:ShareService
    ) {
        this.userSubject = new BehaviorSubject<UserModel>(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): UserModel {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
		const httpOptions = {
			 headers: new HttpHeaders({
				  'Content-Type': 'application/json'
			 }),
			 //withCredentials: true
		};
		
		
		
		
        return this.http.post<any>(`${environment.apiUrl}/auth/authenticate`, { username, password }, httpOptions)
            .pipe(map(user => {
                this.userSubject.next(user.results);
				this.shareService.setCurrentUser(user.results.users.userid);
				this.shareService.setCurrentUserItems(user.results.users);
				this.shareService.setDefinationItems(user.results.definations);
				this.shareService.setMiscItems(user.results.miscs);
				this.shareService.setUserProfileItems(user.results.userprofiles);
				this.shareService.setBranchItems(user.results.branches);
				this.shareService.setAccessBranchItems(user.results.accessbranches);
				
				
                //this.startRefreshTokenTimer();
                return user;
            }));
    }

    logout(token) {
		const httpOptions = {
			 headers: new HttpHeaders({
				  'Content-Type': 'application/json',
				   'Authorization': `Bearer ${token}`
			 }),
			 //withCredentials: true
		};
		
		
        return this.http.post<any>(`${environment.apiUrl}/auth/logout`, {}, httpOptions)
			.subscribe({
                next: () => {
					localStorage.removeItem('token');
					/*this.userSubject.next(null);
					this.shareService.setCurrentUserItems(null)
					this.shareService.setCurrentUser(0)*/
                	this.router.navigate(['/login']);
					
                },
                error: error => {
                    this.userSubject.next(null);
                	this.router.navigate(['/login']);
					
                }
            });


			
        //this.stopRefreshTokenTimer();
        
       
    }

    validateToken() {
		let token = localStorage.getItem('token');
		const httpOptions = {
			 headers: new HttpHeaders({
				  'Content-Type': 'application/json',
				   'Authorization': `Bearer ${token}`
			 }),
			 //withCredentials: true
		};
		
        return this.http.post<any>(`${environment.apiUrl}/auth/validatetoken`, {}, httpOptions)
            .pipe(map((user) => {
                this.userSubject.next(user);
                //this.startRefreshTokenTimer();
                return user;
            }));
    }
	
	redireToRoot(){
		 this.userSubject.next(null);
         this.router.navigate(['/login']);
	}


    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        //const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));
		let token = localStorage.getItem('token');
		let jwtToken = JSON.parse(atob(token.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.validateToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}