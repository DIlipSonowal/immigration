import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorParentsGrandparentsComponent } from './sponsor-parents-grandparents.component';

describe('SponsorParentsGrandparentsComponent', () => {
  let component: SponsorParentsGrandparentsComponent;
  let fixture: ComponentFixture<SponsorParentsGrandparentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorParentsGrandparentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorParentsGrandparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
