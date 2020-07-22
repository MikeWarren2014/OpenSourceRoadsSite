import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DonateSectionComponent } from "./donate-section.component";

describe("DonateSectionComponent", () => {
  let component: DonateSectionComponent;
  let fixture: ComponentFixture<DonateSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DonateSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
