import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrateComponent } from './immigrate.component';

describe('ImmigrateComponent', () => {
  let component: ImmigrateComponent;
  let fixture: ComponentFixture<ImmigrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmigrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
