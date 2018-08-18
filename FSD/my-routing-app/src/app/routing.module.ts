import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component.';
import { AlwaysAuthGuard } from './services/alwaysauthguard.service';
import { ContactsComponent } from './contacts.component';
import { ContactResolve } from './services/contact.resolve';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AlwaysAuthGuard] },
    { path: 'contact/:id', component: ContactsComponent, resolve:{
        contact: ContactResolve
    }},
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);