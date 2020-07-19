import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingInvolvedComponent } from './getting-involved.component';

describe('GettingInvolvedComponent', () => {
  let component: GettingInvolvedComponent;
  let fixture: ComponentFixture<GettingInvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingInvolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
