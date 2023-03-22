import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonScheduleComponent } from 'src/app/components/person-schedule/person-schedule.component';
import { Person, PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  displayedColumns: string[]
  dataSource: Person[]


  constructor(public service:PersonsService,
    public dialog: MatDialog
    ) {
    this.displayedColumns = Object.keys(this.service.person[0])
    this.dataSource = this.service.person;

  }  
  
  ngOnInit(): void {
  }

  openScheduleModal(element:Person){
    this.dialog.open(PersonScheduleComponent, {data: {id:element.id, name:element.name}})
  }


}
