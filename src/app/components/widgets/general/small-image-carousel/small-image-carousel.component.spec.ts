import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallImageCarouselComponent } from './small-image-carousel.component';

describe('SmallImageCarouselComponent', () => {
  let component: SmallImageCarouselComponent;
  let fixture: ComponentFixture<SmallImageCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallImageCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
