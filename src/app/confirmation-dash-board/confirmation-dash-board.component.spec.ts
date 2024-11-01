import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDashBoardComponent } from './confirmation-dash-board.component';

describe('ConfirmationDashBoardComponent', () => {
  let component: ConfirmationDashBoardComponent;
  let fixture: ComponentFixture<ConfirmationDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
