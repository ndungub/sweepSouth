import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from 'app/_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
	loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
	
constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.userValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.compose([
						   Validators.required,
						   Validators.minLength(2)
						])],
            password: ['', Validators.compose([
						   Validators.required,
						   Validators.minLength(2)
						])
					  ]
    });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: (data) => {
	    			localStorage.setItem('token', data.results.jwtToken);
                    this.router.navigate([this.returnUrl]);
                },
                error: error => {
                    this.error = error;
                    this.loading = false;
                }
            });
    }

	validationmsg = {
          'username': [
               { type: 'required', message: 'Username is required.' },
			   { type: 'minlength', message: 'Username must be at least 4 characters long.' },

           ],
          'password': [
               { type: 'required', message: 'Password is required.' },
               { type: 'minlength', message: 'Password must be at least 2 characters long.' },
               { type: 'maxlength', message: 'Password must be 2 characters long.' },
           ]
    }
}

