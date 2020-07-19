import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkSectionComponent } from './our-work-section.component';

describe('OurWorkSectionComponent', () => {
  let component: OurWorkSectionComponent;
  let fixture: ComponentFixture<OurWorkSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorkSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
