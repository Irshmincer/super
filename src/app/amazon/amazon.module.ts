import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmazonRoutingModule } from './amazon-routing.module';
import { AmazonComponent } from './amazon.component';


@NgModule({
  declarations: [AmazonComponent],
  imports: [
    CommonModule,
    AmazonRoutingModule
  ],
  exports: [AmazonComponent]
})
export class AmazonModule { }
