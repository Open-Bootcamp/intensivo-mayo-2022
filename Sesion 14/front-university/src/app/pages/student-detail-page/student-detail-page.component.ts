import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/types/models/Student.type';

@Component({
  selector: 'app-student-detail-page',
  templateUrl: './student-detail-page.component.html',
  styleUrls: ['./student-detail-page.component.scss']
})
export class StudentDetailPageComponent implements OnInit {

  student: Student | undefined;

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log('Active Route', this._route);

    let { id, firstName, lastName, dob, courses } = this._route.snapshot.params;

    this.student = {
      id,
      firstName,
      lastName,
      dob,
      courses
    }

    console.table(this.student);

  }

}
