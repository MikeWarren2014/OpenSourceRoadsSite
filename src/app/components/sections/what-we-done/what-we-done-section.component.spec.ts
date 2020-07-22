import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WhatWeDoneSectionComponent } from "./what-we-done-section.component";

describe("WhatWeDoneSectionComponent", () => {
  let component: WhatWeDoneSectionComponent;
  let fixture: ComponentFixture<WhatWeDoneSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhatWeDoneSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
