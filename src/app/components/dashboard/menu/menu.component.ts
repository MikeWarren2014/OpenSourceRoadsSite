import { Component, OnInit } from "@angular/core";
import { MENU_OPTIONS } from './menu-options';
import { MenuOption } from '../../../models/menu-option';
import { RouterStateSnapshot, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoUnsubscribe } from '../../../auto-unsubscribe';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
@AutoUnsubscribe
export class MenuComponent implements OnInit {

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



  ngOnInit() {
  }

  markSelected(option : MenuOption) {
    this.selectedMenuOption = option;
  }

}
