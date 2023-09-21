import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EdditStudentComponent } from './edit-student/eddit-student.component';

const routes: Routes = [
  // http://localhost:4200/students
  {path:'', component:StudentListComponent},
  // http://localhost:4200/students/add
  {path:'add', component:AddStudentComponent},
  // http://localhost:4200/students/edit/1
  {path:'edit/:id', component:EdditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
