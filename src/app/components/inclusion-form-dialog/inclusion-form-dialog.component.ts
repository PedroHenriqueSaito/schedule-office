import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';
import { SchedulesService } from 'src/app/services/schedules.service';

@Component({
  selector: 'app-inclusion-form-dialog',
  templateUrl: './inclusion-form-dialog.component.html',
  styleUrls: ['./inclusion-form-dialog.component.scss'],
})
export class InclusionFormDialogComponent implements OnInit {
  form: FormGroup = this.fb.group({
    date: this.fb.control('', [Validators.required]),
    personId: this.fb.control('', [Validators.required]),
  });

  formSubscriber: Subscription;

  constructor(
    public dialogRef: MatDialogRef<InclusionFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public scheduleService: SchedulesService,
    public fb: FormBuilder,
    public snackBar: MatSnackBar,
    public personService: PersonsService
  ) {
    scheduleService.filterOfficeAndPerson();
    this.formSubscriber = this.form.valueChanges.subscribe((result) =>
      this.scheduleService.filterOfficeAndPerson(result.personId)
    );
  }

  ngOnInit(): void {}

  submitForm() {
    this.scheduleService.filteredOffices.forEach((element) => {
      if (element.date.toString() == this.form.value.date.toString()) {
        this.form.reset();
        this.snackBar.open('Essa data não está disponível.', '', {
          duration: 3000,
        });
      }
    });

    if (this.form.valid) {
      this.scheduleService.postSchedule({
        office: this.data.office,
        date: this.form.value.date,
        personId: this.form.value.personId,
      });
      this.dialogRef.close();
    }
  }
}
