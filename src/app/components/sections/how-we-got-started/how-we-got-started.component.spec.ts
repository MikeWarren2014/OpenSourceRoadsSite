import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeGotStartedComponent } from './how-we-got-started.component';

describe('HowWeGotStartedComponent', () => {
  let component: HowWeGotStartedComponent;
  let fixture: ComponentFixture<HowWeGotStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeGotStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeGotStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
