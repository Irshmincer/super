import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserData } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


registration= this.fb.group({
  email:['vsmani@gmail.com', Validators.required],
  password:['123', Validators.required],
 
        

})

user : any = {};

  constructor( private fb: FormBuilder, private service: LoginService, private route:Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  //  this.registrationform()
  }


  // registrationform(){
  //   
  // }
  
  set user_profile(role: UserData) {
    localStorage.setItem('user_info', JSON.stringify(role));
  }

  get user_profile(): UserData {
   
    return JSON.parse(localStorage.getItem('user_info') || '{}');
  }
 
    


    Onsubmit(){
      
      this.user = Object.assign(this.user, this.registration.value)
      this.service.loadUserProfile(this.registration.value).subscribe( data =>{
        if(data){
     
          const obj = data.data;
          localStorage.setItem('user_info', JSON.stringify(obj));
          this.route.navigate(['/overview'])
        }
      },
      error=>{
        this.snackBar.open(`${error.error.reason}`, 'Close', { duration: 2000} );
      }
     )
    }
  }



  


