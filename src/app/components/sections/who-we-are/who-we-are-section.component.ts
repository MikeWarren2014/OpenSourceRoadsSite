import { Component, OnInit, Input } from "@angular/core";
import { Image } from "../../../models/image/image";
import { ImagesMap } from "../../../constants/images-map";
import { ImagePrimaryKeys, ImageSecondaryKeys } from "../../../enums/image";
import { BasePageSectionComponent } from "../base-page-section/base-page-section.component";

@Component({
  selector: "app-who-we-are",
  templateUrl: "./who-we-are-section.component.html",
  styleUrls: ["./who-we-are-section.component.css"],
})
export class WhoWeAreSectionComponent extends BasePageSectionComponent {
  title = "Who we are";
  images = [ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][1]];
}
