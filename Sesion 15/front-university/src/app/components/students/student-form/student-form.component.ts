import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/types/models/Student.type';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit{

  @Input() student: Student | undefined;

  studentForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: [this.student?.firstName, Validators.required],
      lastName: [this.student?.lastName, Validators.required],
      dob: [this.student?.dob, Validators.required],
      courses: [this.student?.courses]
    });

    this.studentForm.disable();
  }

  onSubmit(): void {
    alert(JSON.stringify(this.studentForm.value));
    this.studentForm.disable();
  }

  enableForm(): void{
    this.studentForm.enable();
  }

  disableForm(): void{
    this.studentForm.disable();
    this.studentForm.reset();
  }

  navigateBack(): void{
    this._router.navigate(['/students']);
  }
}
