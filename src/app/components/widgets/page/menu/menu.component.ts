import { Component } from "@angular/core";
import { RouterStateSnapshot, Router, NavigationEnd } from "@angular/router";

import { MenuOption } from "../../../../models/menu-option/menu-option";
import { AutoUnsubscribe } from "../../../../auto-unsubscribe";
import { routes } from "../../../../app.routing";
import { MenuOptionBuilder } from "./menu-option-builder";

@Component({
  selector: "side-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
@AutoUnsubscribe
export class MenuComponent {
  menuOptions = routes
    .filter(({ path }) => path !== "" && !path.includes("*"))
    .map((route) => MenuOptionBuilder.FromRoute(route));

  selectedMenuOption = this.menuOptions[0];

  routerChanges;

  isVisible = false;

  constructor(private router: Router) {
    this.selectMenuOptionFrom(router.routerState.snapshot);
    // subscribe to changes from the router
    this.routerChanges = router.events.subscribe((val: NavigationEnd) => {
      this.selectMenuOptionFrom(val);
    });
  }

  selectMenuOptionFrom(obj: { url: string }) {
    this.selectedMenuOption = this.menuOptions.find(
      (option) => option.routerLink === obj.url
    );
  }

  markSelected(option: MenuOption) {
    this.selectedMenuOption = option;
  }
}
