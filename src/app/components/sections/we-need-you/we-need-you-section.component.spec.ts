import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeNeedYouSectionComponent } from "./we-need-you-section.component";

describe("WeNeedYouSectionComponent", () => {
  let component: WeNeedYouSectionComponent;
  let fixture: ComponentFixture<WeNeedYouSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeNeedYouSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeNeedYouSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
