import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InclusionFormDialogComponent } from '../inclusion-form-dialog/inclusion-form-dialog.component';

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

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(): void {}

  openFormDialog(office: String){
    this.dialog.open(InclusionFormDialogComponent, {data: {office:office}})
  }

}
