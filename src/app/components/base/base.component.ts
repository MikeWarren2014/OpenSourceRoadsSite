import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { LoaderComponent } from "../widgets/general/loader/loader.component";
import { Loadable } from "../../interfaces/loadable";
import { LoaderWrapperComponent } from "./loader-wrapper/loader-wrapper.component";

export class BaseComponent implements Loadable {
  @ViewChild(LoaderWrapperComponent) loader: LoaderWrapperComponent;

  protected isLoading: boolean = false;

  constructor() {}

  showLoader() {
    this.isLoading = true;
    this.loader.showLoader();
  }

  hideLoader() {
    this.isLoading = false;
    this.loader.hideLoader();
  }
}
