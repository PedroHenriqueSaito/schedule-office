import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleInfoComponent } from '../schedule-info-dialog/schedule-info.component';
import { Schedule, SchedulesService } from '../../services/schedules.service';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
    selector: 'app-schedules-card',
    templateUrl: './schedules-card.component.html',
    styleUrls: ['./schedules-card.component.scss'],
})
export class SchedulesCardComponent implements OnInit {
    constructor(public scheduleService: SchedulesService, 
        public dialog: MatDialog,
        public personService: PersonsService
        ) {}

    ngOnInit(): void {}

    openInfoDialog(schedule: Schedule){
        this.dialog.open(ScheduleInfoComponent, {data:schedule})
    }

    deleteSchedule(id:String){
        this.scheduleService.deleteItem(id);
    }
}
