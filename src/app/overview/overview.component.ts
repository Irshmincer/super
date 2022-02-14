import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
  AmazonandFacebookResult,
  customer,
  DashboardChart,
  facebook,
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
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexMarkers, ApexTitleSubtitle, ApexFill, ApexYAxis, ApexXAxis, ApexTooltip, ApexNoData } from 'ng-apexcharts';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  ValueforAmazonandFacebook : AmazonandFacebookResult[]
  
  valueforAmazon: AmazonandFacebookResult;
  valueforFacebook : AmazonandFacebookResult;
 hide =false

  formControls = {
    rangeGroup: this.fb.group({
      start: new FormControl(this.addDays(7), Validators.required),
      end: new FormControl(this.Days(0),  Validators.required),
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


  //barchart 3 

  barChartLabels3: any[] = [];
  barChartType3: ChartType = 'bar';
  barChartLegend3: boolean = true;
  barChartData3: any[] = [{ barThickness: 30 }];
  barChartOptions3: ChartOptions = {
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

  //
  chartColors: Array<any> = [
    {
      // all colors in order
      backgroundColor: ['#2EA082', '#2B2272', '#A687FF'],
    },
  ];
  //line chart
  // lineChartData: any[];
  // lineChartLabels: any[];
  // lineChartOptions: ChartOptions = {
  //   scales: {
  //     yAxes: [
  //       {
  //         display: false,
  //       },
  //     ],
  //     xAxes: [
  //       {
  //         ticks: {
  //           autoSkip: true,
  //         },
  //         gridLines: {
  //           drawOnChartArea: false,
  //           lineWidth: 0,
  //         },
  //       },
  //     ],
  //   },
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: '#80aaff',
  //     backgroundColor: 'rgb(128, 170, 255)',
  //   },
  // ];
  // public lineChartLegend = true;
  // public lineChartType: ChartType = 'line';
  // public lineChartPlugins = [];
  //line chart ends
  constructor(
    private login: LoginService,
    private service: OverviewService,
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver, 
    private MatSnackBar: MatSnackBar
  ) {}


  public series!: ApexAxisChartSeries;
  public apexlinechart!: ApexChart;
  public dataLabels!: ApexDataLabels;
  public markers!: ApexMarkers;
  public title!: ApexTitleSubtitle;
  public fill!: ApexFill;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;
  public tooltip!: ApexTooltip;
  public nodata!: ApexNoData;
  lineChartApex= false

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

    if (this.formControls.rangeGroup.invalid) {
      console.log("1")
      this.hide = true
      
     
    }
    else{
      this.loaded1 = false;

      setTimeout(() => {
        this.loaded1 = true;
      }, 2000);
      this.salescount();
      this.customer();
      this.razor();
      this.loadStats();
      this.RazorandShiprocket();
      this.shiprocket();
  
      this.valueAmazonandFacebook();

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
      if(this.name && this.NewCustomer ){
        this.loaded1= true
      }
      this.razorpay = data.data[0];
    });
  }
  namegetter() {
    const shopname = this.login.user_profile;
    this.shopname = shopname;
  }
  // lineChart: DashboardChart = {
  //   type: 'line',
  //   labels: [],
  //   data: {
  //     dataset: [
  //       {
  //         pointRadius: 0,
  //       },
  //     ],
  //   },
  //   legend: true,
  //   colors: [
  //     {
  //       backgroundColor: ['#0088C7'],
  //     },
  //   ],
  //   options: {
  //     plugins: {},
  //     elements: {
  //       point: {
  //         radius: 0,
  //       },
  //     },
  //     scales: {
  //       yAxes: [
  //         {
  //           display: false,
  //         },
  //       ],
  //       xAxes: [
  //         {
  //           type: 'time',
  //           time: {
  //               unit: 'day',
            
  //           },
  //           ticks: {
  //             autoSkip: true,
  //             maxTicksLimit: 12,
  //           },
  //           gridLines: {
  //             drawOnChartArea: false,
  //           },
  //         },
  //       ],
  //     },
  //     responsive: true,
  //     legend: {
  //       display: false,
  //     },
  //   },
  // };
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
      const x = data.data
      console.log(x)
      if(x)
      console.log("424")
      const value1 = x.map(x=>x.totalsales)
      const value2 = x.map(x=>x.order_date)
      const value3 = moment(value2).format('YYYY-MM-DD')
      console.log(value2)
      this.intializationChartoption(value1, value2)
     // this.intializationChartoption(x.map(x=>Number(x.order_date)))

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
      if(this.razorpay && this.NewCustomer ){
        this.loaded1= true
      }
   
      
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


  


  valueAmazonandFacebook(){
    let start = this.formControls.rangeGroup.value.start;
    start = moment(start).format('YYYY-MM-DD');
    let end = this.formControls.rangeGroup.value.end;
    end = moment(end).format('YYYY-MM-DD');
    const form = {
      from: start,
      to: end,
     
    };

    this.service.ValuesforAmazonandFacebook(form).subscribe(data=>{

      this.ValueforAmazonandFacebook= data.result
      console.log(this.ValueforAmazonandFacebook)

     
      this.barChartLabels3 = this.ValueforAmazonandFacebook.map(
        (item) => item.name
      );
     
      this.barChartData3 = this.ValueforAmazonandFacebook.map((item) => item.sales);
      this.loaded = true;
      this.valueforAmazon = data.result[0];
      this.valueforFacebook = data.result[1];

console.log(this.valueforAmazon, this.valueforFacebook)



    }, 
    error =>{
      this.MatSnackBar.open("Selected only one date .Please select from and To date", 'Close', {duration: 3000})

    })
  }




  intializationChartoption(series: number[] , name: any):void {
    this.lineChartApex = true
  

   this.xaxis = {
     categories: name,
     tickAmount: 6,
     labels: {
     rotate:0
    }
    
   }

   this.yaxis ={
     show: true,
     showAlways: true,
     
   }
   this.series = [{
     name: "Purchase",
     data: series  
   }]

   this.dataLabels ={
     enabled: false
   }

   this.markers ={
     size: 0
   }


   this.nodata={
     text: "nodata"
   }
     
   this.apexlinechart = {

     type: "area",
     stacked: false,
     height: 250,
     width:1350,
     animations: {
       enabled: false},
    
   
     toolbar: {
       show: false
     },
     
   };
 }




}
