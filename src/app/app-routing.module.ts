import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // http://localhost:4200/
  {path:'',component:LoginComponent},
  // http://localhost:4200/home
  {path:'home',component:HomeComponent},
  // http://localhost:4200/students
  { path: 'students', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
