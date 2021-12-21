import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiprocketRoutingModule } from './shiprocket-routing.module';
import { ShiprocketComponent } from './shiprocket.component';


@NgModule({
  declarations: [ShiprocketComponent],
  imports: [
    CommonModule,
    ShiprocketRoutingModule
  ],
  exports: [ShiprocketComponent]
})
export class ShiprocketModule { }
