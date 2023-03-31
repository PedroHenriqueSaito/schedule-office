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
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { DateFnsModule } from 'ngx-date-fns';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { OfficeCardComponent } from './components/office-card/office-card.component';
import { SchedulesCardComponent } from './components/schedules-card/schedules-card.component';
import { InclusionFormDialogComponent } from './components/inclusion-form-dialog/inclusion-form-dialog.component';
import { ScheduleInfoComponent } from './components/schedule-info-dialog/schedule-info.component';
import { SchedulesComponent } from './views/schedules/schedules.component';
import { PersonsListComponent } from './views/persons-list/persons-list.component';
import { PersonScheduleComponent } from './components/person-schedule-dialog/person-schedule.component';

const exports = [OfficeCardComponent];
@NgModule({
  exports: exports,

  declarations: [
    AppComponent,
    OfficeCardComponent,
    SchedulesCardComponent,
    InclusionFormDialogComponent,
    ScheduleInfoComponent,
    SchedulesComponent,
    PersonsListComponent,
    PersonScheduleComponent,
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
    MatTabsModule,
    MatTableModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MatRippleModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
