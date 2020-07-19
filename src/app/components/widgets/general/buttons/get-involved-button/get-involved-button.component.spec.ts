import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvolvedButtonComponent } from './get-involved-button.component';

describe('GetInvolvedButtonComponent', () => {
  let component: GetInvolvedButtonComponent;
  let fixture: ComponentFixture<GetInvolvedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInvolvedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInvolvedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
