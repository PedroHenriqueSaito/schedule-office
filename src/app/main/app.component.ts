import { Component } from '@angular/core';
import { Schedule, SchedulesService } from '../services/schedules.service';

export interface Sala {
  titulo: String;
  descricao: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  salas: Sala[] = [
    { titulo: 'Mandela', descricao: 'Aquario grande' },
    { titulo: 'Gandhi', descricao: 'Aquario grande' },
    { titulo: 'Confúcio', descricao: 'Aquario grande' },
    { titulo: 'Lama', descricao: 'Aquario grande' },
  ];
  selectSala(sala: String) {
    this.service.filterOffice(sala);
  }

  constructor(public service:SchedulesService){
  
  }
}
