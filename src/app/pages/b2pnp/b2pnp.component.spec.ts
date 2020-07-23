import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2pnpComponent } from './b2pnp.component';

describe('B2pnpComponent', () => {
  let component: B2pnpComponent;
  let fixture: ComponentFixture<B2pnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2pnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2pnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
