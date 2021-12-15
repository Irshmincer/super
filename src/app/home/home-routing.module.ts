// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';

// const routes: Routes = [
//   {
//     path: '', component: HomeComponent,
//     children: [
//       { path: 'overview', loadChildren: () => import('../overview/overview.module').then(x=> x.OverviewModule)},
//       { path: '', redirectTo: 'overview', pathMatch: 'full'}, 
//       {
//         path: 'facebook', loadChildren : () => import('../facebook/facebook.module'). then(x=> x.FacebookModule),
//         data: {preload: true, delay: 500}
//       }
//     ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class HomeRoutingModule { }
