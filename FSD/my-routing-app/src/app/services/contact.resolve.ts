import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '../../../node_modules/@angular/router';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactResolve implements Resolve<any>{
    
    constructor(private contactsservice: ContactsService) { }  
    
    resolve(route: ActivatedRouteSnapshot){
        console.log(route.params['id'])
        return this.contactsservice.getContact(route.params['id'])
    }


    

}