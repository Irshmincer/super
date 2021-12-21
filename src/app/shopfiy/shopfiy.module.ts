import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopfiyRoutingModule } from './shopfiy-routing.module';
import { ShopfiyComponent } from './shopfiy.component';


@NgModule({
  declarations: [ShopfiyComponent],
  imports: [
    CommonModule,
    ShopfiyRoutingModule
  ],
  exports: [ShopfiyComponent]
})
export class ShopfiyModule { }
