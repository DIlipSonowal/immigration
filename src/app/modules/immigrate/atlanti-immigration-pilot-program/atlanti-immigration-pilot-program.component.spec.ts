import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlantiImmigrationPilotProgramComponent } from './atlanti-immigration-pilot-program.component';

describe('AtlantiImmigrationPilotProgramComponent', () => {
  let component: AtlantiImmigrationPilotProgramComponent;
  let fixture: ComponentFixture<AtlantiImmigrationPilotProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlantiImmigrationPilotProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlantiImmigrationPilotProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
