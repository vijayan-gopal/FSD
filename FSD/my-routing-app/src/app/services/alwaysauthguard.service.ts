import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AlwaysAuthGuard implements CanActivate{
    
    constructor(private loginservice: LoginService,private router: Router) { }

    canActivate(){
        if (this.loginservice.authenticated){
            return true
        }
        else {
            this.router.navigate([''])
        }
    }
}