import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from '../facebook/facebook.component';
import { HomeComponent } from '../home/home.component';
import { OverviewComponent } from '../overview/overview.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'home', component:HomeComponent},
 
  
    
  
    ];
  
 
 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
