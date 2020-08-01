import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperVisaComponent } from './super-visa.component';

describe('SuperVisaComponent', () => {
  let component: SuperVisaComponent;
  let fixture: ComponentFixture<SuperVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
