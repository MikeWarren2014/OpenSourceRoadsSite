import { Component, OnInit } from "@angular/core";
import { BasePageSectionComponent } from "../base-page-section/base-page-section.component";

@Component({
  selector: "app-donate",
  templateUrl: "./donate-section.component.html",
  styleUrls: ["./donate-section.component.css"],
})
export class DonateSectionComponent extends BasePageSectionComponent {
  title = "Donate";
}
