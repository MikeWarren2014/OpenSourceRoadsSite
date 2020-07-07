import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../models/image/image';
import { ImagesMap } from '../../../constants/images-map';
import { ImagePrimaryKeys, ImageSecondaryKeys } from '../../../enums/image';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

  sectionImage : Image = ImagesMap[ImagePrimaryKeys.PEOPLE][ImageSecondaryKeys.TEAM][1];
  constructor() { }

  ngOnInit(): void {
  }

}
