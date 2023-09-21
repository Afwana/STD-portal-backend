import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  adminName:string=""
  totalStudentCount:number = 0
  studentsCount: any[] = []
  totalActiveStudent:number = 0
  totalInactiveStudent:number = 0

  constructor(private api:ApiService,private homeRouter:Router){}

  ngOnInit(): void {
      if(localStorage.getItem("admin_name")){
        this.adminName = localStorage.getItem("admin_name") || ""
      }
      this.totalStudent()
      this.activeStudent()
      this.inactiveStudent()
  }

  updateAdminName(event:any){
    console.log(event);
    this.adminName = event
  }

  totalStudent(){
    this.api.studentDatails().subscribe((res:any)=>{
      console.log(res);
      this.totalStudentCount = res.length
    })
  }

  activeStudent(){
    this.api.studentDatails().subscribe((res: any) => {
      this.studentsCount = res
      this.totalActiveStudent = this.studentsCount.filter((ass) => ass.active=='1').length
      console.log(this.totalActiveStudent);
    })
    
  }

  inactiveStudent(){
    this.api.studentDatails().subscribe((res:any)=>{
      this.studentsCount = res
      this.totalInactiveStudent = this.studentsCount.filter((iass) => iass.active=='0').length
      console.log(this.totalInactiveStudent);
    })
  }

  logout(){
    localStorage.removeItem("admin_name")
    localStorage.removeItem("admin_pswd")
    this.homeRouter.navigateByUrl('')
  }
}
