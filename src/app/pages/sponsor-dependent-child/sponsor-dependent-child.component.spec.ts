import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorDependentChildComponent } from './sponsor-dependent-child.component';

describe('SponsorDependentChildComponent', () => {
  let component: SponsorDependentChildComponent;
  let fixture: ComponentFixture<SponsorDependentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorDependentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorDependentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
