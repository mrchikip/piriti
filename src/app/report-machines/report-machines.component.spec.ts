import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMachinesComponent } from './report-machines.component';

describe('ReportMachinesComponent', () => {
  let component: ReportMachinesComponent;
  let fixture: ComponentFixture<ReportMachinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportMachinesComponent]
    });
    fixture = TestBed.createComponent(ReportMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
