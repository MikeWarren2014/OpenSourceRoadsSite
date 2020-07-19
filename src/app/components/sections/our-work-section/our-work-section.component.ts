import { Component, OnInit } from "@angular/core";
import { BasePageSectionComponent } from "../base-page-section/base-page-section.component";
import { ImagesMap } from "../../../constants/images-map";
import { ImagePrimaryKeys, ImageSecondaryKeys } from "../../../enums/image";

@Component({
  selector: "app-our-work-section",
  templateUrl: "./our-work-section.component.html",
  styleUrls: ["./our-work-section.component.css"],
})
export class OurWorkSectionComponent extends BasePageSectionComponent {
  title = "Our work";
  images = [
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2017][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2018][0],
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2018][2],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2019][0],
  ];
}
