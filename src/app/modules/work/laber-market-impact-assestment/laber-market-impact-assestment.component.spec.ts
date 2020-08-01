import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaberMarketImpactAssestmentComponent } from './laber-market-impact-assestment.component';

describe('LaberMarketImpactAssestmentComponent', () => {
  let component: LaberMarketImpactAssestmentComponent;
  let fixture: ComponentFixture<LaberMarketImpactAssestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaberMarketImpactAssestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaberMarketImpactAssestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
