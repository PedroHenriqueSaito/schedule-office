import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Schedule {
  id: String;
  office: String;
  date: Date;
  personId: number;
}

@Injectable({
  providedIn: 'root',
})
export class SchedulesService {
  schedules: Schedule[] = [
    //   { office: 'Mandela', date: new Date('2023-03-16 00:00:00'), personId: 1 },
    //   { office: 'Mandela', date: new Date('2023-03-17 00:00:00'), personId: 1 },
    //   { office: 'Mandela', date: new Date('2023-03-18 00:00:00'), personId: 1 },
    //   { office: 'Mandela', date: new Date('2023-03-19 00:00:00'), personId: 1 },
    //   { office: 'Mandela', date: new Date('2023-03-20 00:00:00'), personId: 1 },
    //   { office: 'Mandela', date: new Date('2023-03-21 00:00:00'), personId: 1 },
    //   { office: 'Mandela', date: new Date('2023-03-22 00:00:00'), personId: 1 },
    //   { office: 'Gandhi', date: new Date('2023-04-16 00:00:00'), personId: 1 },
    //   { office: 'Gandhi', date: new Date('2023-04-17 00:00:00'), personId: 3 },
    //   { office: 'Confúcio', date: new Date('2023-05-16 00:00:00'), personId: 8 },
    //   { office: 'Confúcio', date: new Date('2023-05-17 00:00:00'), personId: 9 },
    //   { office: 'Confúcio', date: new Date('2023-05-18 00:00:00'), personId: 10 },
    //   { office: 'Confúcio', date: new Date('2023-05-19 00:00:00'), personId: 11 },
    //   { office: 'Lama', date: new Date('2023-07-16 00:00:00'), personId: 11 },
    //   { office: 'Lama', date: new Date('2023-07-17 00:00:00'), personId: 9 },
    //   { office: 'Lama', date: new Date('2023-07-18 00:00:00'), personId: 1 },
  ];
  filteredOffices: Schedule[] = [];
  filteredPerson: Schedule[] = [];
  filteredOfficePerson: Schedule[] = []
  officeFilter: String = '';

  filterOffice() {
    this.filteredOffices = [];
    this.schedules.forEach((element) => {
      if (element.office == this.officeFilter) {
        this.filteredOffices.push(element);
      }
    });
  }

  filterPerson(id: number) {
    this.filteredPerson = [];
    this.schedules.forEach((element) => {
      if (element.personId == id) {
        this.filteredPerson.push(element);
      }
    });
  }

  filterOfficeAndPerson(id?: number) {
    this.filteredOfficePerson = []
    id? 
    this.filteredOffices.forEach((element) => {
      if (element.personId == id) {
        this.filteredOfficePerson.push(element);
      }
    }):this.filteredOfficePerson = this.filteredOffices 
  }

  postSchedule(schd: any) {
    let schedule: any;
    schedule = schd;
    schedule.date = schd.date.getTime() / 1000;

    this.http
      .post(
        'https://641a103ef398d7d95d4ffd2d.mockapi.io/schedule/api/v1/schedule',
        schedule
      )
      .subscribe(() => {
        this.getSchedules();
      });
  }

  getSchedules() {
    this.schedules = [];
    this.http
      .get(
        'https://641a103ef398d7d95d4ffd2d.mockapi.io/schedule/api/v1/schedule'
      )
      .subscribe((data: any) => {
        data.forEach((element: any) => {
          var schedule: any = {};
          schedule.office = element.office;
          schedule.date = new Date(element.date * 1000);
          schedule.personId = element.personId;
          schedule.id = element.id;

          this.schedules.push(schedule);
          this.filterOffice();
        });
      });
  }

  deleteItem(id: String) {
    this.http
      .delete(
        `https://641a103ef398d7d95d4ffd2d.mockapi.io/schedule/api/v1/schedule/${id}`
      )
      .subscribe(() => {
        this.getSchedules();
      });
  }
  constructor(private http: HttpClient) {}
}
