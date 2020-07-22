import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HowWeGotStartedSectionComponent } from "./how-we-got-started-section.component";

describe("HowWeGotStartedSectionComponent", () => {
  let component: HowWeGotStartedSectionComponent;
  let fixture: ComponentFixture<HowWeGotStartedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HowWeGotStartedSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeGotStartedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
