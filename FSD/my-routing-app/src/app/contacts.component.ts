import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from './services/contacts.service';
import { Contact } from './Classes/contact';

@Component({
    selector: 'app-contacts',
    template: `
    <h2>Display contact details here</h2>
    <p>id:{{contact?.id}}</p>
    <p>name:{{contact?.name}}</p>
    <p>number:{{contact?.mobile}}</p>
    `
})
export class ContactsComponent implements OnInit {
   // id: number
    contact: Contact
    constructor(private activatedroute: ActivatedRoute,private contactsservice: ContactsService) { }

    ngOnInit() { 
   //     this.id = this.activatedroute.snapshot.params.id
   //     this.contactsservice.getContact(this.id)
   //     .subscribe((data)=>{
   //         this.contact=data})
        console.log("in contact component")
        this.contact = this.activatedroute.snapshot.data['contact']
    }

}