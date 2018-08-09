import { Component, OnInit, ViewChild } from '@angular/core';
import { BannerComponent } from '../dashboard/banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  
  constructor() { }

  ngOnInit() {
  }

}
