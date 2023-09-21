import { Component, OnInit } from '@angular/core';
import { StudentSchema } from '../students.model';
import { ApiService } from 'src/app/services/api.service';
import jspdf from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  allStudents:StudentSchema[]=[]
  searchKey:string=""
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  constructor(private api:ApiService){}

  ngOnInit():void {
    this.studentDetails()
  }

  studentDetails(){
    this.api.studentDatails().subscribe({
      next:(result:any)=>{
        console.log(result);
        this.allStudents = result
      },
      error:(result:any)=>{
        console.log(result);
        alert("Cannot fetch the data Now... Please check after sometime!!!")
      }
    })
  }

  sortById(){
    this.allStudents.sort((a:any,b:any) => a.id-b.id)
  }

  sortByName(){
    this.allStudents.sort((a:any,b:any) => a["name"].localeCompare(b["name"]))
  }

  generatePDF(){
    let pdf = new jspdf()
    let head = [['Student Id','Student Name','Email','Status']]
    let body:any = []
    this.allStudents.forEach((item:any) => {
      body.push([item.id,item.name,item.Email,item.active])
    })
    pdf.setFontSize(18)
    pdf.text("All Students List",15,15)
    autoTable(pdf,{head,body})
    pdf.output('dataurlnewwindow')
    pdf.save("allStudents.pdf")
  }

  deleteStudent(id:any){
    this.api.deletestudent(id).subscribe({
      next:(res:any) => {
        console.log("Deleted successfully");
        this.studentDetails()
      },
      error:(err:any)=>{
        console.log(err);
        alert("Cannot fetch the data Now... Please check after sometime!!!")
      }
    })
  }

  onTableDataChange(event: any){
    this.page = event;
  }
}
