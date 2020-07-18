import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCampusWorkComponent } from './on-campus-work.component';

describe('OnCampusWorkComponent', () => {
  let component: OnCampusWorkComponent;
  let fixture: ComponentFixture<OnCampusWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnCampusWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCampusWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
