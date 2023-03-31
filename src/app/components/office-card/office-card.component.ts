import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss'],
})
export class OfficeCardComponent implements OnInit {
  @Input()
  titulo!: String;

  @Input()
  descricao!: String;

  @Input()
  isSelected: boolean = false  

  @Output()
  newSchedule = new EventEmitter()

  constructor() {
    
  }

  ngOnInit(): void {}

  addSchedule(office: String){
    this.newSchedule.emit({office:office});

  }

}
