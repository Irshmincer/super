import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
//import { NgChartsModule } from 'ng2-charts';



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
    MatFormFieldModule

  ],
  exports:[OverviewComponent],
  providers:[LoginService, OverviewService]
})
export class OverviewModule { }
