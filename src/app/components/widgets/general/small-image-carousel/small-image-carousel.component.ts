import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Image } from '../../../../models/image/image';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-small-image-carousel',
  templateUrl: './small-image-carousel.component.html',
  styleUrls: ['./small-image-carousel.component.css']
})
export class SmallImageCarouselComponent implements OnInit,AfterViewInit {

  // @Input() images : Image[] = [];
  @Input()
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/1200/750`);

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.carousel.pause();
  }

}
