import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchedulesService } from 'src/app/services/schedules.service';

@Component({
  selector: 'app-person-schedule',
  templateUrl: './person-schedule.component.html',
  styleUrls: ['./person-schedule.component.scss'],
})
export class PersonScheduleComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public scheduleService: SchedulesService
  ) {
    this.scheduleService.filterPerson(data.id);
  }

  ngOnInit(): void {}
}
