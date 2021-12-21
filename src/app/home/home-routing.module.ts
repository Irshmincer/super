import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () =>
          import('../overview/overview.module').then((x) => x.OverviewModule),
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'shopfiy',
        loadChildren: () =>
          import('../shopfiy/shopfiy.module').then((x) => x.ShopfiyModule),
        data: { preload: true, delay: 2000 },
      },
      {
        path: 'facebook',
        loadChildren: () =>
          import('../facebook/facebook.module').then((x) => x.FacebookModule),
        data: { preload: true, delay: 2000 },
      },
      {
        path: 'amazon',
        loadChildren: () =>
          import('../amazon/amazon.module').then((x) => x.AmazonModule),
        data: { preload: true, delay: 2000 },
      },
      {
        path: 'shiprocket',
        loadChildren: () =>
          import('../shiprocket/shiprocket.module').then((x) => x.ShiprocketModule),
        data: { preload: true, delay: 2000 },
      },
      {
        path: 'razorpay',
        loadChildren: () =>
          import('../razorpay/razorpay.module').then((x) => x.RazorpayModule),
        data: { preload: true, delay: 2000 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
