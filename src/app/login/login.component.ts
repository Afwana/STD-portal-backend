import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  url="./assets/images/users.png"
  username:string=""
  password:string=""

  constructor(private api:ApiService,private loginRouter:Router){}

  login(){
    if(this.username && this.password){
      this.api.adminDetails().subscribe({
        next:(result:any)=>{
          console.log(result);
          if(this.username===result.username && this.password===result.password){
            localStorage.setItem("admin_name",result.name)
            localStorage.setItem("admin_pswd",result.password)
            alert("Authorisation Successfull")
            this.loginRouter.navigateByUrl('home')
          }
          else{
            alert("Invalid Admin Credentials...")
          }
        },
        error:(result:any)=>{
          console.log(result);
          alert("Cannot fetch the data Now... Please check after sometime!!!")
        }
      })
    }
    else{
      alert('Please fill the form completely!!!')
    }
  }

}
