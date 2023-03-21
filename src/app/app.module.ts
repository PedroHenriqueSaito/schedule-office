import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { OfficeCardComponent } from './office-card/office-card.component';
import { SchedulesCardComponent } from './schedules-card/schedules-card.component';
import { DateFnsModule } from 'ngx-date-fns';
import { InclusionFormDialogComponent } from './components/inclusion-form-dialog/inclusion-form-dialog.component';
import { ScheduleInfoComponent } from './schedule-info/schedule-info.component';

const exports = [OfficeCardComponent];
@NgModule({
    exports: exports,

    declarations: [
        AppComponent,
        OfficeCardComponent,
        SchedulesCardComponent,
        InclusionFormDialogComponent,
        ScheduleInfoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        FlexLayoutModule,
        MatListModule,
        MatDividerModule,
        DateFnsModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatSnackBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
