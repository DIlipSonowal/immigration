import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiFraudPolicyComponent } from './anti-fraud-policy.component';

describe('AntiFraudPolicyComponent', () => {
  let component: AntiFraudPolicyComponent;
  let fixture: ComponentFixture<AntiFraudPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiFraudPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiFraudPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
