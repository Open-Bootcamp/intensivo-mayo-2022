import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from 'src/app/types/models/Student.type';
import { StudentsTableDataSource } from './students-table-datasource';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Student>;
  dataSource: StudentsTableDataSource;

  firstNameSearch: string = '';
  lastNameSearch: string = '';
  birthdaySearch: Date = new Date();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'dob', 'actions'];

  constructor(private _router: Router) {
    this.dataSource = new StudentsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  goToStudentDetail(student: any){
    console.log(`students detail: ${student.id}`);
    this._router.navigate([`/students/${student.id}`, student]);
  }

  filterData(){
    console.log('First Name Search:', this.firstNameSearch);
    console.log('Last Name Search:', this.lastNameSearch);
    console.log('Birthday Search:', this.birthdaySearch);
    this.table.dataSource = this.dataSource.filterData(this.firstNameSearch, this.lastNameSearch, this.birthdaySearch);
  }

}
