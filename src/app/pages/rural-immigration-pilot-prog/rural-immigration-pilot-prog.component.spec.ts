import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralImmigrationPilotProgComponent } from './rural-immigration-pilot-prog.component';

describe('RuralImmigrationPilotProgComponent', () => {
  let component: RuralImmigrationPilotProgComponent;
  let fixture: ComponentFixture<RuralImmigrationPilotProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralImmigrationPilotProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuralImmigrationPilotProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
