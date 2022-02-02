import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface DashboardChart {
  type: ChartType;
  labels: Label[];
  data?: any; // for pie chart
  dataset?: any; // for bar chart
  legend: true;
  colors?: [{ backgroundColor: ['#0088C7'] }];
  options: ChartOptions;

}


export interface NewCustomer {
  status: number;
  message: string;
  result: customer[];
}

export interface customer {
  totalcount: number;
  name: string;
}


export interface shipRocketCount {
  status: number;
  message: string;
  data: shiprocket[];
}

export interface shiprocket {
  total_amount: number;
}
export interface razorPayCount {
  status: number;
  message: string;
  data: razorpay[];
}

export interface razorpay {
  total_razorpay_payment: number;
}



export interface salesCounts {
  status: number;
  message: string;
  result: salesCount[];
}

export interface salesCount {
  sales: number;
  name: string;
}



export interface TotalSaleShopify {
  status: number;
  message: string;
  data: totalsale[];
}

export interface totalsale {
  totalsales: number;
  order_date: string;
}



export interface ValuesforRazorandShopfiy {
  status: number;
  message: string;
  result: RazorandShiprocket[];
}

export interface RazorandShiprocket {
  sales: number;
  name: string;
}


//amazon 

export interface amazon {
  total_amount: number;
}