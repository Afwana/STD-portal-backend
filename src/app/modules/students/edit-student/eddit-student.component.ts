import { Component, OnInit } from '@angular/core';
import { StudentSchema } from '../students.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eddit-student',
  templateUrl: './eddit-student.component.html',
  styleUrls: ['./eddit-student.component.css']
})
export class EdditStudentComponent implements OnInit{

  students:StudentSchema = {}

  constructor(private route:ActivatedRoute,private api:ApiService,private studentsRouter:Router){}

  ngOnInit(): void {
      this.route.params.subscribe((res:any)=>{
        const {id} = res
        console.log(id);
        this.existingstudent(id)
      })
  }

  existingstudent(id:any){
    this.api.getexistingstudent(id).subscribe({
      next:(res:StudentSchema)=>{
        console.log(res);
        this.students = res
      },
      error:(err:any)=>{
        console.log(err);
        alert("Cannot fetch the data Now...Please try after sometime!!!")
      }
    })
  }

  updateStudent(){
    this.api.updatestudent(this.students.id,this.students).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("Student details updated successfully...")
        this.studentsRouter.navigateByUrl('students')
      },
      error:(err:any)=>{
        console.log(err);
        alert("Cannot fetch the data Now...Please try after sometime!!!")
      }
    })
  }

  cancelUpdate(studentId:any){
    console.log("cancel clicked");
    this.existingstudent(studentId)
  }
}
