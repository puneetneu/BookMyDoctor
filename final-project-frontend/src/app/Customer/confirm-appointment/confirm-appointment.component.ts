import { Component, OnInit ,Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DoctorService} from '../../Doctor/shared/doctor.service';
import { AuthService } from 'src/app/Homepage/auth.service';

// define the dialogue box data for booking appointmennt
export interface DialogData {
  customerID: string;
  doctorID: string;
}
@Component({
  selector: 'app-confirm-appointment',
  templateUrl: './confirm-appointment.component.html',
  styleUrls: ['./confirm-appointment.component.scss']
})
export class ConfirmAppointmentComponent implements OnInit {
  // using a service, creates a dialogue box to book appointment with customer and doctor id
  constructor(private doctorService : DoctorService ,private authService: AuthService,
    public dialogRef: MatDialogRef<ConfirmAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {


  }



}
