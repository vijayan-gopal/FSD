import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRouting } from './routing.module';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component.';
import { HttpModule } from '@angular/http';
import { LoginService } from './services/login.service';
import { AlwaysAuthGuard } from './services/alwaysauthguard.service';
import { ContactsService } from './services/contacts.service';
import { ContactsComponent } from './contacts.component';
import { ContactResolve } from './services/contact.resolve';


@NgModule({
  declarations: [
    AppComponent,LoginComponent,ProfileComponent,ContactsComponent
  ],
  imports: [
    BrowserModule,appRouting,HttpModule
  ],
  providers: [LoginService,AlwaysAuthGuard,ContactsService,ContactResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
