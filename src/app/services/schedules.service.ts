import { Injectable } from '@angular/core';
import { Sala } from '../main/app.component';

export interface Schedule {
    sala: String;
    data: Date;
}

@Injectable({
    providedIn: 'root',
})
export class SchedulesService {
    offices: Schedule[] = [
        { sala: 'Mandela', data: new Date('2023-03-16 00:00:00') },
        { sala: 'Mandela', data: new Date('2023-03-17 00:00:00') },
        { sala: 'Mandela', data: new Date('2023-03-18 00:00:00') },
        { sala: 'Mandela', data: new Date('2023-03-19 00:00:00') },
        { sala: 'Mandela', data: new Date('2023-03-20 00:00:00') },
        { sala: 'Mandela', data: new Date('2023-03-21 00:00:00') },
        { sala: 'Mandela', data: new Date('2023-03-22 00:00:00') },

        { sala: 'Gandhi', data: new Date('2023-04-16 00:00:00') },
        { sala: 'Gandhi', data: new Date('2023-04-17 00:00:00') },

        { sala: 'Confúcio', data: new Date('2023-05-16 00:00:00') },
        { sala: 'Confúcio', data: new Date('2023-05-17 00:00:00') },
        { sala: 'Confúcio', data: new Date('2023-05-18 00:00:00') },
        { sala: 'Confúcio', data: new Date('2023-05-19 00:00:00') },

        { sala: 'Lama', data: new Date('2023-07-16 00:00:00') },
        { sala: 'Lama', data: new Date('2023-07-17 00:00:00') },
        { sala: 'Lama', data: new Date('2023-07-18 00:00:00') },
    ];

    filteredOffices: Schedule[] = [];

    filterOffice(p: String) {
        this.filteredOffices = [];
        this.offices.forEach((element) => {
            if (element.sala == p) {
                this.filteredOffices.push(element);
            }
        });
    }

    includeNewDate(schd: Schedule) {
        this.offices.push(schd);
        this.filterOffice(schd.sala);
    }

    constructor() {}
}
