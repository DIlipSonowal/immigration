import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSkillsStrategyComponent } from './global-skills-strategy.component';

describe('GlobalSkillsStrategyComponent', () => {
  let component: GlobalSkillsStrategyComponent;
  let fixture: ComponentFixture<GlobalSkillsStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSkillsStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSkillsStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
