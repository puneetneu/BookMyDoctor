import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAppointmentComponent } from './confirm-appointment.component';

describe('ConfirmAppointmentComponent', () => {
  let component: ConfirmAppointmentComponent;
  let fixture: ComponentFixture<ConfirmAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
