import { Component, OnInit } from "@angular/core";
import { Image } from "../../../models/image/image";
import { ImagesMap } from "../../../constants/images-map";
import { ImagePrimaryKeys, ImageSecondaryKeys } from "../../../enums/image";

@Component({
  selector: "app-how-we-got-started",
  templateUrl: "./how-we-got-started.component.html",
  styleUrls: ["./how-we-got-started.component.css"],
})
export class HowWeGotStartedComponent implements OnInit {
  images: Image[] = [
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.MIKE][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2017][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2018][0],
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][0],
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][1],
  ];

  constructor() {}

  ngOnInit(): void {}
}
