import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Schedule } from '../../services/schedules.service';

@Component({
  selector: 'app-schedule-info',
  templateUrl: './schedule-info.component.html',
  styleUrls: ['./schedule-info.component.scss']
})
export class ScheduleInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }





}
