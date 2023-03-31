import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PersonScheduleComponent } from 'src/app/components/person-schedule-dialog/person-schedule.component';
import { Person, PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit, OnDestroy {
  personSubscriber: Subscription;
  dataSource!: Person[];

  constructor(public service: PersonsService, public dialog: MatDialog) {
    this.personSubscriber = service.personChange.subscribe(() => {
      this.dataSource = this.service.person;
    });
  }

  ngOnInit(): void {}
  
  ngOnDestroy(): void{
    this.personSubscriber.unsubscribe();
  }

  openScheduleModal(element: Person) {
    this.dialog.open(PersonScheduleComponent, {
      data: { id: element.id, name: element.name },
    });
  }
}
