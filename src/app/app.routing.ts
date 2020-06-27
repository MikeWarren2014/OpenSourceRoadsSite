import { Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { MessageSentComponent } from "./components/pages/contact/message-sent/message-sent.component";
import { MessageSentGuard } from "./guards/message-sent-guard";

export const routes : Routes = [
    {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'contact',
        children: [
            {
                path: '',
                component: ContactComponent
            },
            {
                path: 'messageSent',
                component: MessageSentComponent,
                // TODO: implement a guard on this component, that checks for "message sent" status data. 
                // if there isn't any, it should bounce to ContactComponent
                canActivate: [MessageSentGuard]
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    }, 
    {
        path : '**',
        redirectTo : 'home'
    }
];