import { Injectable } from '@angular/core';
import { Contact } from '../Classes/contact';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsService {
    
    contacts: Array<Contact> = [
        {id: 1,name:"Vijayan1",mobile:9999999999},
        {id: 2,name:"Vijayan2",mobile:9999999999},
        {id: 12,name:"Vijayan12",mobile:9999999999},
        {id: 24,name:"Vijayan24",mobile:9999999999},
    ]
    constructor() { }
    temp: Observable<Contact>
    getContacts(): Observable<Contact>{
        return Observable.create(observer=>{observer.next(this.contacts)})
    }

    getContact(id: number){
       return this.temp=Observable.create(observer=>{
            setTimeout(() => {
                console.log(id)
                observer.next(this.contacts.find((contact)=>contact.id==id))   
            }, 5000);
        //observer.next(this.contacts.find((contact)=>contact.id==id))
    })
    }

}