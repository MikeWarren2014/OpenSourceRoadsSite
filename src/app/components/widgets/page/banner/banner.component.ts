import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css", "./banner.component.responsive.css"],
})
export class BannerComponent implements OnInit {
  public menuVisible = false;

  constructor() {}

  ngOnInit() {}

  public toggleMenuVisible() {
    this.menuVisible = !this.menuVisible;
  }
}
