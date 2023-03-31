import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

export interface Person {
  id: number;
  name: String;
  email: String;
  phone: String;
}

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  personChange = new Subject();
  displayedColumns: string[] = [];
  person: Person[] = [
    // {
    //   id: 1,
    //   name: 'Contato 1',
    //   email: 'contato1@exemplo.com',
    //   phone: '1611111111',
    // },
    // {
    //   id: 2,
    //   name: 'Contato 2',
    //   email: 'contato2@exemplo.com',
    //   phone: '1622222222',
    // },
    // {
    //   id: 3,
    //   name: 'Contato 3',
    //   email: 'contato3@exemplo.com',
    //   phone: '1633333333',
    // },
    // {
    //   id: 4,
    //   name: 'Contato 4',
    //   email: 'contato4@exemplo.com',
    //   phone: '1644444444',
    // },
    // {
    //   id: 5,
    //   name: 'Contato 5',
    //   email: 'contato5@exemplo.com',
    //   phone: '1655555555',
    // },
    // {
    //   id: 6,
    //   name: 'Contato 6',
    //   email: 'contato6@exemplo.com',
    //   phone: '1666666666',
    // },
    // {
    //   id: 7,
    //   name: 'Contato 7',
    //   email: 'contato7@exemplo.com',
    //   phone: '1677777777',
    // },
    // {
    //   id: 8,
    //   name: 'Contato 8',
    //   email: 'contato8@exemplo.com',
    //   phone: '1688888888',
    // },
    // {
    //   id: 9,
    //   name: 'Contato 9',
    //   email: 'contato9@exemplo.com',
    //   phone: '1699999999',
    // },
    // {
    //   id: 10,
    //   name: 'Contato 10',
    //   email: 'contato10@exemplo.com',
    //   phone: '1610101010',
    // },
    // {
    //   id: 11,
    //   name: 'Contato 11',
    //   email: 'contato11@exemplo.com',
    //   phone: '1611111111',
    // },
  ];

  constructor(private http: HttpClient) {}

  getPerson() {
    this.http
      .get('https://641a103ef398d7d95d4ffd2d.mockapi.io/schedule/api/v1/person')
      .subscribe((data: any) => {
        this.person = data;
        this.displayedColumns = Object.keys(this.person[0]);
        console.log(this.displayedColumns)
        this.emitPersonChange();
      });
  }

  emitPersonChange(){
    this.personChange.next();
  }
}
