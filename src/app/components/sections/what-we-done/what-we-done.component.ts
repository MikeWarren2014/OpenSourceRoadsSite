import { Component, OnInit } from "@angular/core";
import { Image } from "../../../models/image/image";
import { ImagesMap } from "../../../constants/images-map";
import { ImagePrimaryKeys, ImageSecondaryKeys } from "../../../enums/image";
import { BasePageSectionComponent } from "../base-page-section/base-page-section.component";

@Component({
  selector: "app-what-we-done",
  templateUrl: "./what-we-done.component.html",
  styleUrls: ["./what-we-done.component.css"],
})
export class WhatWeDoneComponent extends BasePageSectionComponent {
  title = "What we've done";
  images = [
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2017][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2018][0],
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2018][2],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2019][0],
  ];
}
