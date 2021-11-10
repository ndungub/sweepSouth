import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';


import { AuthenticationService } from 'app/_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  loading = false;

  constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        
  }

   onLogOut() {
        this.loading = true;
		let token = localStorage.getItem('token');
        this.authenticationService.logout(token)
            
    }


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
