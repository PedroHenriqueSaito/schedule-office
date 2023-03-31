import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InclusionFormDialogComponent } from 'src/app/components/inclusion-form-dialog/inclusion-form-dialog.component';
import { PersonsService } from 'src/app/services/persons.service';
import { SchedulesService } from '../../services/schedules.service';

export interface Sala {
  titulo: String;
  descricao: String;
}

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  selectedOffice!: String

  salas: Sala[] = [
    { titulo: 'Mandela', descricao: 'Aquario grande' },
    { titulo: 'Gandhi', descricao: 'Aquario grande' },
    { titulo: 'Confúcio', descricao: 'Aquario grande' },
    { titulo: 'Lama', descricao: 'Aquario grande' },
  ];


  selectSala(office: String) {
    this.scheduleService.officeFilter = office;
    this.scheduleService.filterOffice();
    this.selectedOffice = this.scheduleService.officeFilter
  } 

  constructor(public scheduleService:SchedulesService, personService:PersonsService, public dialog:MatDialog){
    scheduleService.getSchedules();
    personService.getPerson();
    
  }

  ngOnInit(): void {
  }

  openFormDialog(office:any){
    this.dialog.open(InclusionFormDialogComponent, {data: {office:office}})
  }

}
