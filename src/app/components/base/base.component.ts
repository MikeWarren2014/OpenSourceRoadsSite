import { Component, ViewChild } from "@angular/core";
import { Loadable } from "../../interfaces/loadable";
import { LoaderWrapperComponent } from "./loader-wrapper/loader-wrapper.component";

export class BaseComponent implements Loadable {
  @ViewChild(LoaderWrapperComponent) loader: LoaderWrapperComponent;

  isVisible: boolean = false;
  protected isLoading: boolean = false;

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  showLoader() {
    this.isLoading = true;
    this.loader.showLoader();
  }

  hideLoader() {
    this.isLoading = false;
    this.loader.hideLoader();
  }
}
