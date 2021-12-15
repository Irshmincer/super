import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from '../facebook/facebook.component';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  {path:'', component: OverviewComponent},
  {path:'overview', component: OverviewComponent},
  {path:'facebook', component: FacebookComponent},
  {path:'razor', component: OverviewComponent},

  



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
