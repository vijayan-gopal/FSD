import { Component, OnInit } from '@angular/core';
import { ContactsService } from './services/contacts.service';
import { Contact } from './Classes/contact'
import { Observable } from 'rxjs';

@Component({
    selector: 'app-profile',
    template: `
    <h2>Profile Component</h2>
    <ul>
        <li *ngFor="let contact of contacts | async"><a routerLink='/contact/{{contact.id}}'>{{contact.name}}</a></li>
    </ul>
    `
})
export class ProfileComponent implements OnInit {
    contacts: Observable<Contact>
    constructor(private contactsservices: ContactsService) { }

    ngOnInit() { 
        this.contacts = this.contactsservices.getContacts()
    }

}