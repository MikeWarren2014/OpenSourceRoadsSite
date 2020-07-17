import { Component, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "../../base/base.component";
import { PageSectionWrapperComponent } from "../page-section-wrapper/page-section-wrapper.component";
import { Image } from "../../../models/image/image";

@Component({
  selector: "app-base-page-section",
  templateUrl: "./base-page-section.component.html",
  styleUrls: ["./base-page-section.component.css"],
})
export class BasePageSectionComponent extends BaseComponent {
  @ViewChild(PageSectionWrapperComponent) super: PageSectionWrapperComponent;

  title: string = "";
  images: Image[] = [];
}
