import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import {
  ChartType,
  ChartOptions,
  ChartDataSets,
  ChartConfiguration,
} from 'chart.js';
import * as moment from 'moment';
import { UserData } from '../login/login.model';
import { LoginService } from '../login/login.service';
import {
  amazon,
  customer,
  DashboardChart,
  RazorandShiprocket,
  razorpay,
  salesCount,
  shiprocket,
  totalsale,
} from './overview.model';
import { OverviewService } from './overview.service';
import { Color, Label } from 'ng2-charts';
import { tick } from '@angular/core/testing';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  shopname: UserData;
  weekday: any;
  totalvalue: number;
  today: any;

  valueforAmazon: amazon;
  formControls = {
    rangeGroup: this.fb.group({
      start: new FormControl(this.addDays(7)),
      end: new FormControl(this.Days(0)),
    }),
  };
  startDate = new FormControl(new Date(this.addDays(7)));
  endDate = new FormControl(new Date(this.Days(0)));
  gridColumns = 3;
  totalSaleShopfiy: totalsale[];
  totalSales: totalsale[];
  //2.bar graph
  rezorpayandshiprocket: RazorandShiprocket[];
  ship: RazorandShiprocket;
  razorvalue: RazorandShiprocket;
  sales: salesCount;
  name: salesCount[];
  shiprocketcount: shiprocket;
  salesname: salesCount[];
  razorpay: razorpay;
  newcustomer: salesCount;
  salesfromnewcustomer: salesCount;
  salesfromexcitingcustomer: salesCount;
  NewCustomer: customer;
  chart: any;
  breakpoint: any;
  //barchart 1
  barChartLabels: any[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] = [{ barThickness: 30 }];
  barChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            lineWidth: 0,
          },
          ticks: {
            fontFamily: 'Mulish',
            beginAtZero: true,
            callback: function (value: number, index, values) {
              return value % 2 === 0
                ? '$ ' + Intl.NumberFormat().format(value / 1000) + 'K'
                : '';
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            lineWidth: 0,
          },
          ticks: {
            display: true,
            fontFamily: 'Mulish',
            beginAtZero: true,
            fontSize: 10,
            minRotation: 0,
            maxRotation: 0,
          },
        },
      ],
    },
  };
  //barchart2
  barChartLabels2: any[] = [];
  barChartType2: ChartType = 'bar';
  barChartLegend2: boolean = true;
  barChartData2: any[] = [{ barThickness: 30 }];
  barChartOptions2: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            lineWidth: 0,
          },
          ticks: {
            fontFamily: 'Mulish',
            beginAtZero: true,
            callback: function (value: number, index, values) {
              return value % 2 === 0
                ? '$ ' + Intl.NumberFormat().format(value / 1000) + 'K'
                : '';
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            lineWidth: 0,
          },
          ticks: {
            display: true,
            fontFamily: 'Mulish',
            beginAtZero: true,
            fontSize: 10,
            minRotation: 0,
            maxRotation: 0,
          },
        },
      ],
    },
  };
  loaded = false;
  loaded1 = false;
  cols: number;
  flag = true;
  e: number;
  list: number[];
  ///
  chartColors: Array<any> = [
    {
      // all colors in order
      backgroundColor: ['#2EA082', '#2B2272', '#A687FF'],
    },
  ];
  //line chart
  lineChartData: any[];
  lineChartLabels: any[];
  lineChartOptions: ChartOptions = {
    scales: {
      yAxes: [
        {
          display: false,
        },
      ],
      xAxes: [
        {
          ticks: {
            autoSkip: true,
          },
          gridLines: {
            drawOnChartArea: false,
            lineWidth: 0,
          },
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#80aaff',
      backgroundColor: 'rgb(128, 170, 255)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  //line chart ends
  constructor(
    private login: LoginService,
    private service: OverviewService,
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit(): void {
    setInterval(() => {
      this.loaded1 = true;
    }, 3000);
    this.onsubmit();
    this.namegetter();
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (window.screen.width === 450) {
          this.flag = false;
        }
        if (result.breakpoints[Breakpoints.XSmall]) {
          // this.isSize = Breakpoints.XSmall;
          this.cols = 1;
          this.flag = false;
          // handle XSmall breakpoint
        }
        if (result.breakpoints[Breakpoints.Small]) {
          // this.isSize = Breakpoints.Small;
          this.cols = 1;
          // handle Small breakpoint
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          // this.isSize = Breakpoints.Medium;
          this.cols = 1;
          // handle Medium breakpoint
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = 2;
          // handle Large breakpoint
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          // this.isSize = Breakpoints.XLarge;
          this.cols = 2;
          // handle XLarge breakpoint
        }
      });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }
  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  addDays(days: number): Date {
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() - 7);
    return futureDate;
  }
  Days(days: number): Date {
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate());
    return futureDate;
  }
  onsubmit() {
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      fromdate: start,
      todate: end,
      vendor_name: this.login.user_profile.name,
    };
    console.log(form);

    if (form) {
      this.salescount();
      this.customer();
      this.razor();
      this.loadStats();
      this.RazorandShiprocket();
      this.shiprocket();
      console.log(this.amazon())
    }
  }
  customer() {
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      fromdate: start,
      todate: end,
      vendor_name: this.login.user_profile.name,
    };
    if (form) {
      this.service.newcustomer(form).subscribe((data) => {
        this.NewCustomer = data.result[0];
      });
    }
  }
  shiprocket() {
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      fromdate: start,
      todate: end,
      vendor_name: this.login.user_profile.name,
    };
    this.service.shipRocket(form).subscribe((data) => {
      this.shiprocketcount = data.data[0];
    });
  }
  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }
  razor() {
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      fromdate: start,
      todate: end,
      vendor_name: this.login.user_profile.name,
    };
    this.service.razorPay(form).subscribe((data) => {
      this.razorpay = data.data[0];
    });
  }
  namegetter() {
    const shopname = this.login.user_profile;
    this.shopname = shopname;
  }
  lineChart: DashboardChart = {
    type: 'line',
    labels: [],
    data: {
      dataset: [
        {
          pointRadius: 0,
        },
      ],
    },
    legend: true,
    colors: [
      {
        backgroundColor: ['#0088C7'],
      },
    ],
    options: {
      plugins: {},
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        yAxes: [
          {
            display: false,
          },
        ],
        xAxes: [
          {
            type: 'time',
            time: {
                unit: 'day',
            
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 12,
            },
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
      },
      responsive: true,
      legend: {
        display: false,
      },
    },
  };
  loadStats() {
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      fromdate: start,
      todate: end,
      vendor_name: this.login.user_profile.name,
    };
    // Customer stats
    this.service.TotalSalesShopfiy(form).subscribe((data) => {
      console.log(data);
      this.loaded = true;
      this.lineChart.data = data.data.map((x) => x.totalsales);
      this.lineChart.labels = data.data.map((x) => x.order_date);
    });
  }
  salescount() {
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      fromdate: start,
      todate: end,
      vendor_name: this.login.user_profile.name,
    };
    this.service.Salescount(form).subscribe((data) => {
      this.name = data.result;
      this.barChartLabels = this.name.map((item) => item.name);
      const labels = this.barChartLabels.map((label) => label.split(' '));
      this.barChartLabels = labels;
      this.barChartData = this.name.map((item) => item.sales);
      this.loaded = true;
      this.sales = data.result[0];
      this.salesfromnewcustomer = data.result[1];
      this.salesfromexcitingcustomer = data.result[2];
    });
  }
  RazorandShiprocket() {
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      fromdate: start,
      todate: end,
      vendor_name: this.login.user_profile.name,
    };
    this.service.ValuesforRazorandShopfiy(form).subscribe((data) => {
      this.rezorpayandshiprocket = data.result;
      console.log(this.rezorpayandshiprocket);
      this.barChartLabels2 = this.rezorpayandshiprocket.map(
        (item) => item.name
      );
      const labels = this.barChartLabels2.map((label) => label.split(' '));
      this.barChartLabels2 = labels;
      this.barChartData2 = this.rezorpayandshiprocket.map((item) => item.sales);
      this.loaded = true;
      this.razorvalue = data.result[0];
      this.ship = data.result[1];
    });
  }


  amazon(){
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      from: start,
      to: end,
     
    };

    this.service.ValuesforAmazon(form).subscribe(data => {
      this.valueforAmazon = data
    })

  }
}
