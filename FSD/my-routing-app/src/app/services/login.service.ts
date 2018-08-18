import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    authenticated: boolean = false
    constructor(private http: Http) { }

    authenticate():Promise<any>  {
        return this.http.get('assets/dummy.json').toPromise()
        .then(res=>res.json())
        .then(data=> {
            if (data.auth){
               this.authenticated = true
            }
            else {
                this.authenticated = false
            }
            return data
        })
    }
}