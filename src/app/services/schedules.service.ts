import { Injectable } from '@angular/core';

export interface Schedule {
  office: String;
  date: Date;
  personId: number;
}

@Injectable({
  providedIn: 'root',
})
export class SchedulesService {
  offices: Schedule[] = [
    { office: 'Mandela', date: new Date('2023-03-16 00:00:00'), personId: 1 },
    { office: 'Mandela', date: new Date('2023-03-17 00:00:00'), personId: 1 },
    { office: 'Mandela', date: new Date('2023-03-18 00:00:00'), personId: 1 },
    { office: 'Mandela', date: new Date('2023-03-19 00:00:00'), personId: 1 },
    { office: 'Mandela', date: new Date('2023-03-20 00:00:00'), personId: 1 },
    { office: 'Mandela', date: new Date('2023-03-21 00:00:00'), personId: 1 },
    { office: 'Mandela', date: new Date('2023-03-22 00:00:00'), personId: 1 },

    { office: 'Gandhi', date: new Date('2023-04-16 00:00:00'), personId: 1 },
    { office: 'Gandhi', date: new Date('2023-04-17 00:00:00'), personId: 3 },

    { office: 'Confúcio', date: new Date('2023-05-16 00:00:00'), personId: 8 },
    { office: 'Confúcio', date: new Date('2023-05-17 00:00:00'), personId: 9 },
    { office: 'Confúcio', date: new Date('2023-05-18 00:00:00'), personId: 10 },
    { office: 'Confúcio', date: new Date('2023-05-19 00:00:00'), personId: 11 },

    { office: 'Lama', date: new Date('2023-07-16 00:00:00'), personId: 11 },
    { office: 'Lama', date: new Date('2023-07-17 00:00:00'), personId: 9 },
    { office: 'Lama', date: new Date('2023-07-18 00:00:00'), personId: 1 },
  ];

  filteredOffices: Schedule[] = [];
  filteredPerson: Schedule[] = []

  filterOffice(p: String) {
    this.filteredOffices = [];
    this.offices.forEach((element) => {
      if (element.office == p) {
        this.filteredOffices.push(element);
      }
    });
  }

  includeNewDate(schd: Schedule) {
    this.offices.push(schd);
    this.filterOffice(schd.office);
  }

  filterPerson(id: number){
    this.filteredPerson = []
    this.offices.forEach(element => {
        if(element.personId == id){
            this.filteredPerson.push(element)
        }
    });
  }



  constructor() {}
}
