import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmployedImmigrationComponent } from './self-employed-immigration.component';

describe('SelfEmployedImmigrationComponent', () => {
  let component: SelfEmployedImmigrationComponent;
  let fixture: ComponentFixture<SelfEmployedImmigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfEmployedImmigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEmployedImmigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
