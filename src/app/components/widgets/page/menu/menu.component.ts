import { Component } from "@angular/core";
import { RouterStateSnapshot, Router,  NavigationEnd } from '@angular/router';

import { MENU_OPTIONS } from './menu-options';
import { MenuOption } from '../../../../models/menu-option/menu-option';
import { AutoUnsubscribe } from '../../../../auto-unsubscribe';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
@AutoUnsubscribe
export class MenuComponent {

  menuOptions = MENU_OPTIONS;

  selectedMenuOption = MENU_OPTIONS[0];

  routerChanges;

  constructor(private router : Router) {
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    this.selectedMenuOption = this.menuOptions.find((option) => option.routerLink === snapshot.url);
    this.routerChanges = router.events
      .subscribe((val : NavigationEnd) => {
        this.selectedMenuOption = this.menuOptions.find((option) => option.routerLink === val.url);
      })

  }

  markSelected(option : MenuOption) {
    this.selectedMenuOption = option;
  }

}
