import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  salas: any[] = [
    { titulo: 'Mandela', descricao: 'Aquario grande' },
    { titulo: 'Gandhi', descricao: 'Aquario grande' },
    { titulo: 'Confucio', descricao: 'Aquario grande' },
    { titulo: 'Lama', descricao: 'Aquario grande' },
  ];
  selectSala(sala: String) {
    console.log(sala);
  }
}
