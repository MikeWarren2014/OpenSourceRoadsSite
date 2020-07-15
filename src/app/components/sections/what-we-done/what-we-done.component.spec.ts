import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoneComponent } from './what-we-done.component';

describe('WhatWeDoneComponent', () => {
  let component: WhatWeDoneComponent;
  let fixture: ComponentFixture<WhatWeDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
