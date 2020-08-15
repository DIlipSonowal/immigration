import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1cfstComponent } from './b1cfst.component';

describe('B1cfstComponent', () => {
  let component: B1cfstComponent;
  let fixture: ComponentFixture<B1cfstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1cfstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1cfstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
