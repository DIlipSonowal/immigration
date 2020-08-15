import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1bcecComponent } from './b1bcec.component';

describe('B1bcecComponent', () => {
  let component: B1bcecComponent;
  let fixture: ComponentFixture<B1bcecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1bcecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1bcecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
