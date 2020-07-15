import { Component } from "@angular/core";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent extends BaseComponent {
  title = "About";
}
