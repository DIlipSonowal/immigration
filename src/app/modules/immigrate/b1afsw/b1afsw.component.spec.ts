import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1afswComponent } from './b1afsw.component';

describe('B1afswComponent', () => {
  let component: B1afswComponent;
  let fixture: ComponentFixture<B1afswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1afswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1afswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
