import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalWorkersComponent } from './agricultural-workers.component';

describe('AgriculturalWorkersComponent', () => {
  let component: AgriculturalWorkersComponent;
  let fixture: ComponentFixture<AgriculturalWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
