import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/dashboard/about/about.component";
import { ContactComponent } from "./components/dashboard/contact/contact.component";

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
        component : ContactComponent
    }, 
    {
        path : '**',
        redirectTo : 'home'
    }
];