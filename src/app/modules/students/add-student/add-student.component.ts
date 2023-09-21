import { Component } from '@angular/core';
import { StudentSchema } from '../students.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  students:StudentSchema={}

  constructor(private api:ApiService,private studentsRouter:Router){}
  
  addStudent(){
    this.api.addstudent(this.students).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("New Student added successfully")
        this.studentsRouter.navigateByUrl('students')
      },
      error:(err:any)=>{
        console.log(err);
        alert("Cannot fetch the data Now... Please try after sometime!!!")
      }
    })
  }

  cancel(){
    this.students = {}
  }
}
