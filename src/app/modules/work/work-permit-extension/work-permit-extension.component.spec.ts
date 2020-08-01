import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPermitExtensionComponent } from './work-permit-extension.component';

describe('WorkPermitExtensionComponent', () => {
  let component: WorkPermitExtensionComponent;
  let fixture: ComponentFixture<WorkPermitExtensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPermitExtensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPermitExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
