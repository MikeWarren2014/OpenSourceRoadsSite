import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorBoxDonationComponent } from './donor-box-donation.component';

describe('DonorBoxDonationComponent', () => {
  let component: DonorBoxDonationComponent;
  let fixture: ComponentFixture<DonorBoxDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorBoxDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorBoxDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
