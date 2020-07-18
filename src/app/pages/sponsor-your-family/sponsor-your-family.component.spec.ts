import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorYourFamilyComponent } from './sponsor-your-family.component';

describe('SponsorYourFamilyComponent', () => {
  let component: SponsorYourFamilyComponent;
  let fixture: ComponentFixture<SponsorYourFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorYourFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorYourFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
