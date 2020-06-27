import { MenuOption } from "../../../../models/menu-option/menu-option";

export const MENU_OPTIONS : Array<MenuOption> = [
    {
        routerLink : '/home',
        text : 'Home'
    },
    {
        text : 'About',
        routerLink : '/about'
    },
    {
        text : 'Contact',
        routerLink : '/contact'
    }
];