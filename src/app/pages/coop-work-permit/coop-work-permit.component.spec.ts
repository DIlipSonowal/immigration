import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopWorkPermitComponent } from './coop-work-permit.component';

describe('CoopWorkPermitComponent', () => {
  let component: CoopWorkPermitComponent;
  let fixture: ComponentFixture<CoopWorkPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoopWorkPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoopWorkPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
