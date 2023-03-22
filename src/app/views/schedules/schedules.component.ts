import { Component, OnInit } from '@angular/core';
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
    this.service.filterOffice(office);
    this.selectedOffice = office
  } 

  constructor(public service:SchedulesService){
  
  }

  ngOnInit(): void {
  }

}
