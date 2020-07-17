import { Component, OnInit } from "@angular/core";
import { BasePageSectionComponent } from "../base-page-section/base-page-section.component";

@Component({
  selector: "app-we-need-you",
  templateUrl: "./we-need-you.component.html",
  styleUrls: ["./we-need-you.component.css"],
})
export class WeNeedYouComponent extends BasePageSectionComponent {
  title = "We need you!!";
}
