import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedChildComponent } from './adopted-child.component';

describe('AdoptedChildComponent', () => {
  let component: AdoptedChildComponent;
  let fixture: ComponentFixture<AdoptedChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptedChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
