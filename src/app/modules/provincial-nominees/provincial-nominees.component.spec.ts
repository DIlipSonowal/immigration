import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincialNomineesComponent } from './provincial-nominees.component';

describe('ProvincialNomineesComponent', () => {
  let component: ProvincialNomineesComponent;
  let fixture: ComponentFixture<ProvincialNomineesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincialNomineesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincialNomineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
