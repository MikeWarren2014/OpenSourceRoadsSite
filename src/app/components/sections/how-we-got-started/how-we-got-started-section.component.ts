import { Component, OnInit, ViewChild } from "@angular/core";
import { ImagesMap } from "../../../constants/images-map";
import { ImagePrimaryKeys, ImageSecondaryKeys } from "../../../enums/image";
import { BasePageSectionComponent } from "../base-page-section/base-page-section.component";

@Component({
  selector: "app-how-we-got-started",
  templateUrl: "./how-we-got-started-section.component.html",
  styleUrls: ["./how-we-got-started-section.component.css"],
})
export class HowWeGotStartedSectionComponent extends BasePageSectionComponent {
  title = "How we got started";
  images = [
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.MIKE][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2017][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2018][0],
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][0],
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][1],
  ];
}
