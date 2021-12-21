import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RazorpayRoutingModule } from './razorpay-routing.module';
import { RazorpayComponent } from './razorpay.component';


@NgModule({
  declarations: [RazorpayComponent],
  imports: [
    CommonModule,
    RazorpayRoutingModule
  ],
  exports: [RazorpayComponent]
})
export class RazorpayModule { }
