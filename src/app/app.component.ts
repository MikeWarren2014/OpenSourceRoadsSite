import { Component, ViewChild } from "@angular/core";
import { BannerComponent } from "./components/widgets/page/banner/banner.component";
import { MenuComponent } from "./components/widgets/page/menu/menu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css", "./app.component.responsive.css"],
})
export class AppComponent {
  title = "OpenSourceRoads";
  @ViewChild(BannerComponent) banner: BannerComponent;
  @ViewChild(MenuComponent) menu: MenuComponent;

  constructor() {}

  onDone(show: boolean) {
    if (show) this.menu.show();
    else this.menu.hide();
  }
}
