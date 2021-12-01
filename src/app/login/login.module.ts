import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialsModule } from '../materials/materials.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewModule } from '../overview/overview.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    OverviewModule,
    HttpClientModule,
    MatSnackBarModule
    
    
  ],
  providers:[LoginService]
})
export class LoginModule { }
