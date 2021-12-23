import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { LoginService } from '../login/login.service';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { OverviewService } from './overview.service';
import { ChartsModule } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { NgChartsModule } from 'ng2-charts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    ChartsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxSkeletonLoaderModule
  ],
  exports: [OverviewComponent],
  providers: [LoginService, OverviewService, DatePipe],
})
export class OverviewModule {}
