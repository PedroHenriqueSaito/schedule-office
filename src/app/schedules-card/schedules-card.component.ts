import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleInfoComponent } from '../schedule-info/schedule-info.component';
import { Schedule, SchedulesService } from '../services/schedules.service';

@Component({
    selector: 'app-schedules-card',
    templateUrl: './schedules-card.component.html',
    styleUrls: ['./schedules-card.component.scss'],
})
export class SchedulesCardComponent implements OnInit {
    constructor(public service: SchedulesService, public dialog: MatDialog) {}

    ngOnInit(): void {}


    openInfoDialog(schedule: Schedule){
        this.dialog.open(ScheduleInfoComponent, {data:schedule})
    }
}
