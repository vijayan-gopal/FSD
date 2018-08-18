import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
    selector: 'app-login',
    template: `
    <h2>Login Component</h2>
    <div *ngIf="message!=''" class="alert alert-warning" role="alert">
    {{message}}
    </div>
    <div class="input-group mb-3">
        <div>
            <label for="username">Username</label>
            <input #user (change)='0' type="text" id="username" placeholder="Enter Username">
        </div>
    </div>
    <div class="input-group mb-3">
    <div>
    <label for="password">Password</label>
    <input #pass type="password" id="password" placeholder="Enter Password">
    </div>
    </div>
    <button (click)=login(user.value,pass.value) type="button" class="btn btn-primary">Login</button>
    `
})
export class LoginComponent implements OnInit {
    message : string = ''
    constructor(private loginservice: LoginService, private http: Http,private router: Router) { }

    ngOnInit() { 

    }

    login(user: string,pass: string){
        this.loginservice.authenticate()
        .then(any=>{
            console.log(any.auth)
            if (this.loginservice.authenticated){
                this.router.navigate(['profile'])
            }
            else {
                this.message = 'Invalid Username/password'
            }
        })


    }

}