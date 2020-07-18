import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalExperiencesComponent } from './international-experiences.component';

describe('InternationalExperiencesComponent', () => {
  let component: InternationalExperiencesComponent;
  let fixture: ComponentFixture<InternationalExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
