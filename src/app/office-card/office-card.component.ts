import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss'],
})
export class OfficeCardComponent implements OnInit {
  @Input()
  titulo: String = 'Gandhi';

  @Input()
  descricao: String = 'Aquario grande';

  constructor() {}

  ngOnInit(): void {}
}
