import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentSchema } from '../modules/students/students.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string = "https://students-portal-m6c1.onrender.com"

  constructor(private http:HttpClient) { }

  // get admin details
  adminDetails(){
    // api call to http://localhost:3200/students/1
    return this.http.get(`${this.base_url}/students/1`)
  }

  studentDatails(){
    return this.http.get(`${this.base_url}/students`)
  }

  addstudent(students:StudentSchema){
    return this.http.post(`${this.base_url}/students`,students)
  }

  getexistingstudent(id:any){
    return this.http.get (`${this.base_url}/students/${id}`)
  }

  updatestudent(id:any,data:StudentSchema){
    return this.http.put(`${this.base_url}/students/${id}`,data)
  }

  deletestudent(id:any){
    return this.http.delete(`${this.base_url}/students/${id}`)
  }

  updateAdmin(adminBody:StudentSchema){
    return this.http.put(`${this.base_url}/students/1`,adminBody)
  }
}
