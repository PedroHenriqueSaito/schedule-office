import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SchedulesService, Schedule } from 'src/app/services/schedules.service';

@Component({
    selector: 'app-inclusion-form-dialog',
    templateUrl: './inclusion-form-dialog.component.html',
    styleUrls: ['./inclusion-form-dialog.component.scss'],
})
export class InclusionFormDialogComponent implements OnInit {
    form: FormGroup = this.fb.group({
        data: this.fb.control('', [Validators.required]),
    });

    constructor(
        public dialogRef: MatDialogRef<InclusionFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public service: SchedulesService,
        public fb: FormBuilder,
        public snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {}

    submitForm() {
        this.service.filteredOffices.forEach((element) => {
            if (element.data.toString() == this.form.value.data.toString()) {
                this.form.reset();
                this.snackBar.open('Essa data não está disponível.', '', {   duration: 3000 });
            }
        });

        if (this.form.valid) {
            this.service.includeNewDate({
                sala: this.data.office,
                data: this.form.value.data,
            });
            this.dialogRef.close();
        }
    }

}


