import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySponsershipComponent } from './family-sponsership.component';

describe('FamilySponsershipComponent', () => {
  let component: FamilySponsershipComponent;
  let fixture: ComponentFixture<FamilySponsershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilySponsershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilySponsershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
