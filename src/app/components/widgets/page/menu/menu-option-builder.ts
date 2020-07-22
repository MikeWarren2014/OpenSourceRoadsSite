import { Route } from "@angular/router";
import { MenuOption } from "../../../../models/menu-option/menu-option";

export class MenuOptionBuilder {
  static FromRoute(route: Route): MenuOption {
    return new MenuOption(`/${route.path}`);
  }
}
