import { Component, OnInit } from "@angular/core";
import { Image } from "../../../models/image/image";
import { ImagesMap } from "../../../constants/images-map";
import { ImagePrimaryKeys, ImageSecondaryKeys } from "../../../enums/image";

@Component({
  selector: "app-what-we-done",
  templateUrl: "./what-we-done.component.html",
  styleUrls: ["./what-we-done.component.css"],
})
export class WhatWeDoneComponent implements OnInit {
  images: Image[] = [
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2017][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2018][0],
    ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][0],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2018][2],
    ImagesMap[ImagePrimaryKeys.WORK_WEVE_DONE][2019][0],
  ];

  constructor() {}

  ngOnInit(): void {}
}
