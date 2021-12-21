import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RazorpayComponent } from './razorpay.component';

const routes: Routes = [
  {
    path: '', component: RazorpayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RazorpayRoutingModule { }
