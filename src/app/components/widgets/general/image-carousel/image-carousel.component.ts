import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { Image } from "../../../../models/image/image";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-image-carousel",
  templateUrl: "./image-carousel.component.html",
  styleUrls: ["./image-carousel.component.css"],
})
export class ImageCarouselComponent implements OnInit, AfterViewInit {
  @Input() images: Image[] = [];

  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.carousel.pause();
  }
}
