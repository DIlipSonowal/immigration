import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupVisaProgComponent } from './startup-visa-prog.component';

describe('StartupVisaProgComponent', () => {
  let component: StartupVisaProgComponent;
  let fixture: ComponentFixture<StartupVisaProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupVisaProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupVisaProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
