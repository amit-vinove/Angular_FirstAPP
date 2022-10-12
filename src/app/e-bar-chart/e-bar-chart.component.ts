import { Component , OnInit} from '@angular/core';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-e-bar-chart',
  templateUrl: './e-bar-chart.component.html',
  styleUrls: ['./e-bar-chart.component.css']
})
export class EBarChartComponent implements OnInit  {
  constructor() { }

  ngOnInit(): void {
  }

  public chartOption: EChartsOption = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28]
      },
      {
        type: 'bar',
        data: [26, 24, 18, 22, 23, 20]
      },
      {
        type: 'bar',
        data: [26, 24, 18, 22, 23, 20]
      },
      {
        type: 'bar',
        data: [16, 12, 28, 12, 23, 30]
      },
      {
        type: 'bar',
        data: [36, 34, 38, 28, 13, 20]
      },
      {
        type: 'bar',
        data: [46, 14, 8, 32, 29, 10]
      }
    ]
  }

}
