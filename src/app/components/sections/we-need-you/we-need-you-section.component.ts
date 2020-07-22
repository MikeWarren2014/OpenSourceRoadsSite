import { Component, OnInit } from "@angular/core";
import { BasePageSectionComponent } from "../base-page-section/base-page-section.component";

@Component({
  selector: "app-we-need-you",
  templateUrl: "./we-need-you-section.component.html",
  styleUrls: ["./we-need-you-section.component.css"],
})
export class WeNeedYouSectionComponent extends BasePageSectionComponent {
  title = "We need you!!";
}
