import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDirectStreamComponent } from './student-direct-stream.component';

describe('StudentDirectStreamComponent', () => {
  let component: StudentDirectStreamComponent;
  let fixture: ComponentFixture<StudentDirectStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDirectStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDirectStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
