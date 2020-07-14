import { Component, OnInit, ViewChild } from "@angular/core";
import { Loadable } from "../../../interfaces/loadable";
import { LoaderComponent } from "../../widgets/general/loader/loader.component";

@Component({
  selector: "app-loader-wrapper",
  templateUrl: "./loader-wrapper.component.html",
  styleUrls: ["./loader-wrapper.component.css"],
})
export class LoaderWrapperComponent implements Loadable {
  @ViewChild(LoaderComponent) loader: LoaderComponent;

  constructor() {}

  showLoader() {
    this.loader.show();
  }

  hideLoader() {
    this.loader.hide();
  }
}
