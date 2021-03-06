import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css", "./banner.component.responsive.css"],
})
export class BannerComponent implements OnInit {
  @Output() onToggle: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
