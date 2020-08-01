import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComnComponent } from './comn.component';

describe('ComnComponent', () => {
  let component: ComnComponent;
  let fixture: ComponentFixture<ComnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
