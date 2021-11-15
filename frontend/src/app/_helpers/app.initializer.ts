import { AuthenticationService } from 'app/_services';

export function appInitializer(authenticationService: AuthenticationService) {
    return () => new Promise(resolve => {
        let token = localStorage.getItem('token');
		
		if(token != null){
	        authenticationService.validateToken()
	            .subscribe()
	            .add(resolve);
		}else{
			//authenticationService.redireToRoot()
			resolve(null);
		}

    });
}