import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { MenuOption } from "../../../../models/menu-option/menu-option";
import { AutoUnsubscribe } from "../../../../auto-unsubscribe";
import { routes } from "../../../../app.routing";
import { MenuOptionBuilder } from "./menu-option-builder";
import { BaseComponent } from "../../../base/base.component";

@Component({
  selector: "side-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
@AutoUnsubscribe
export class MenuComponent extends BaseComponent {
  menuOptions = routes
    .filter(({ path }) => path !== "" && !path.includes("*"))
    .map((route) => MenuOptionBuilder.FromRoute(route));

  selectedMenuOption = this.menuOptions[0];

  routerChanges;

  constructor(private router: Router) {
    super();
    this.selectMenuOptionFrom(router.routerState.snapshot);
    // subscribe to changes from the router
    this.routerChanges = router.events.subscribe((val: NavigationEnd) => {
      this.selectMenuOptionFrom(val);
    });
  }

  selectMenuOptionFrom(obj: { url: string; urlAfterRedirects?: string }) {
    if (obj.url) {
      const url =
        obj.url === obj.urlAfterRedirects ? obj.url : obj.urlAfterRedirects;
      this.selectedMenuOption = this.menuOptions.find(
        (option) => option.routerLink === url
      );
    }
  }

  markSelected(option: MenuOption) {
    this.selectedMenuOption = option;
    this.hide();
  }
}
