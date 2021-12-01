import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '',
  loadChildren: () => import('./login/login.module').then(x => x.LoginModule),pathMatch: 'prefix', },
  { path: 'overview', redirectTo: '' },
  { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
