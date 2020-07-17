import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSpecificWorkPermitComponent } from './employee-specific-work-permit.component';

describe('EmployeeSpecificWorkPermitComponent', () => {
  let component: EmployeeSpecificWorkPermitComponent;
  let fixture: ComponentFixture<EmployeeSpecificWorkPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSpecificWorkPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSpecificWorkPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
