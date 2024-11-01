import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkForceDashboardComponent } from './work-force-dashboard.component';

describe('WorkForceDashboardComponent', () => {
  let component: WorkForceDashboardComponent;
  let fixture: ComponentFixture<WorkForceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkForceDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkForceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
