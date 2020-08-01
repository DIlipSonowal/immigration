import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorRelativesComponent } from './sponsor-relatives.component';

describe('SponsorRelativesComponent', () => {
  let component: SponsorRelativesComponent;
  let fixture: ComponentFixture<SponsorRelativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorRelativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorRelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
