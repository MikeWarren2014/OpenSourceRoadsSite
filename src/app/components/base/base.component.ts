import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { LoaderComponent } from "../widgets/general/loader/loader.component";

@Component({
  selector: "app-base",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.css"],
})
export class BaseComponent implements AfterViewInit {
  @ViewChild(LoaderComponent) loader: LoaderComponent;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.loader);
  }

  showLoader() {
    this.loader.show();
  }

  hideLoader() {
    this.loader.hide();
  }
}
