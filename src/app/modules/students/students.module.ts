import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EdditStudentComponent } from './edit-student/eddit-student.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentListComponent,
    AddStudentComponent,
    EdditStudentComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class StudentsModule { }
