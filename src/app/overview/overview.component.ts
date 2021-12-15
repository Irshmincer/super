import { Component, OnInit } from '@angular/core';

import { ChartType, ChartOptions } from 'chart.js';
import { UserData } from '../login/login.model';
import { LoginService } from '../login/login.service';
import { salesCount } from './overview.model';
import { OverviewService } from './overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  shopname!: UserData;
  sales!: salesCount;
  name!: salesCount[];
  salesname!: salesCount[];
  newcustomer!: salesCount;
  salesfromnewcustomer!: salesCount;
  salesfromexcitingcustomer!: salesCount;
  NewCustomer: any;
  chart: any;

  ///

  chartColors: Array<any> = [
    {
      // all colors in order
      backgroundColor: ['#2EA082', '#2B2272', '#A687FF'],
    },
  ];
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value: number, index, values) {
              return '$ ' + Intl.NumberFormat().format(value / 100000) + 'K';
            },
           
          },
          
        },
      ],
      xAxes: [
        {
          
         
          gridLines: {
            lineWidth: 0,
            
          },
          
        },
      ],
    },
  };

  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [];
  loaded = false;

  constructor(private login: LoginService, private service: OverviewService) {}

  ngOnInit(): void {
    this.salescount();
    this.namegetter();
  }

  namegetter() {
    const shopname = this.login.user_profile;
    this.shopname = shopname;
  }

  salescount() {
    const form = {
      vendor_name: this.login.user_profile.name,
      fromdate: '',
      todate: '',
    };
    this.service.Salescount(form).subscribe((data) => {
      this.name = data.result;
      this.barChartLabels = this.name.map((item) => item.name);

      let items = this.barChartLabels.map((item) => item);

      if (items) {
        const item = items[1];
        if (item == 'New customers') {
          const item = this.barChartLabels.splice(1, 1);
        }
      }

      this.barChartData = this.name.map((item) => item.sales);

      let values = this.barChartData.map((item) => item);

      if (values) {
        const value = values[1];
        if (value === value) {
          const item1 = this.barChartData.splice(1, 1);
        }
      }

      this.loaded = true;

      this.sales = data.result[0];

      this.newcustomer = data.result[1];
      this.salesfromnewcustomer = data.result[2];
      this.salesfromexcitingcustomer = data.result[3];
    });
  }
}
