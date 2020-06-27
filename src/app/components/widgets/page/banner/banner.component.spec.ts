import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { element, by } from 'protractor';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu on/off when menu button is clicked', () => { 
    // reset component's menuVisible to false
    component.menuVisible = false;
    // click the menuButton
    expect(element(by.id('menuButton'))).toBeTruthy(); // this is causing a slew of errors on the console. WHY.jpeg
  })
});
