import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeNeedYouComponent } from './we-need-you.component';

describe('WeNeedYouComponent', () => {
  let component: WeNeedYouComponent;
  let fixture: ComponentFixture<WeNeedYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeNeedYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeNeedYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
