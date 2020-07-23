import { Component, ViewChild } from "@angular/core";
import { BannerComponent } from "./components/widgets/page/banner/banner.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css", "./app.component.responsive.css"],
})
export class AppComponent {
  title = "OpenSourceRoads";
  @ViewChild(BannerComponent) banner: BannerComponent;

  constructor() {}
}
