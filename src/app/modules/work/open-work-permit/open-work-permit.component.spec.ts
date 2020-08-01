import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWorkPermitComponent } from './open-work-permit.component';

describe('OpenWorkPermitComponent', () => {
  let component: OpenWorkPermitComponent;
  let fixture: ComponentFixture<OpenWorkPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenWorkPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWorkPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
