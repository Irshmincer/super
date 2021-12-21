import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopfiyComponent } from './shopfiy.component';

const routes: Routes = [{
  path:'', component: ShopfiyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopfiyRoutingModule { }
