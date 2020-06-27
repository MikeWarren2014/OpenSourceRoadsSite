import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../../models/image/image';

@Component({
  selector: 'app-small-image-carousel',
  templateUrl: './small-image-carousel.component.html',
  styleUrls: ['./small-image-carousel.component.css']
})
export class SmallImageCarouselComponent implements OnInit {

  @Input() images : Image[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
