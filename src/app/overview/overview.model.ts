import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface DashboardChart {
  type: ChartType;
  labels: Label[];
  data?: number[]; // for pie chart
  dataset?: ChartDataSets[]; // for bar chart
  legend: true;
  colors?: [{ backgroundColor: ['#0088C7', '#FFB200', '#F46F20', '#9C27B0', '#009688', '#FFC107'] }];
  options: ChartOptions;
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


// export interface DashboardChart {
//   type: ChartType;
// //  labels: Label[];
//   data?: number[]; // for pie chart
//   dataset?: ChartDataset[]; // for bar chart
//   legend: true;
//   colors?: [{ backgroundColor: ['#0088C7', '#FFB200', '#F46F20', '#9C27B0', '#009688', '#FFC107'] }];
//   options: ChartOptions;
// }
