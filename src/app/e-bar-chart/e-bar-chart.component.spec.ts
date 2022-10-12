import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBarChartComponent } from './e-bar-chart.component';

describe('EBarChartComponent', () => {
  let component: EBarChartComponent;
  let fixture: ComponentFixture<EBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
