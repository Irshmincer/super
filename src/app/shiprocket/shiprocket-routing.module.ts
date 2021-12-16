import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiprocketComponent } from './shiprocket.component';

const routes: Routes = [
  {
    path: '', component: ShiprocketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiprocketRoutingModule { }
