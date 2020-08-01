import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincialComponent } from './provincial.component';

describe('ProvincialComponent', () => {
  let component: ProvincialComponent;
  let fixture: ComponentFixture<ProvincialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
