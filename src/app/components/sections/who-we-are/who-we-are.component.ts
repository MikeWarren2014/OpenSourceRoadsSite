import { Component, OnInit, Input } from "@angular/core";
import { Image } from "../../../models/image/image";
import { ImagesMap } from "../../../constants/images-map";
import { ImagePrimaryKeys, ImageSecondaryKeys } from "../../../enums/image";
import { BasePageSectionComponent } from "../base-page-section/base-page-section.component";

@Component({
  selector: "app-who-we-are",
  templateUrl: "./who-we-are.component.html",
  styleUrls: ["./who-we-are.component.css"],
})
export class WhoWeAreComponent extends BasePageSectionComponent {
  title = "Who we are";
  images = [ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][1]];
}
