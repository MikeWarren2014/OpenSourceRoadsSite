import { Component, OnInit, ViewChild } from '@angular/core';
import { BannerComponent } from './components/dashboard/banner/banner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenSourceRoads';
   @ViewChild(BannerComponent) banner : BannerComponent;

   constructor() {}

   ngOnInit() {console.log(this.banner)}
}
