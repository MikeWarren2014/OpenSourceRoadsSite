import { Component, OnInit, Input } from "@angular/core";
import { Image } from "../../../models/image/image";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: "app-page-section-wrapper",
  templateUrl: "./page-section-wrapper.component.html",
  styleUrls: ["./page-section-wrapper.component.css"],
})
export class PageSectionWrapperComponent extends BaseComponent {
  @Input() title: string = "";
  @Input() images: Image[] = [];
}
