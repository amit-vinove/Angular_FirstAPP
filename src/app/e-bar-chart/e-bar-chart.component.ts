import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-e-bar-chart',
  templateUrl: './e-bar-chart.component.html',
  styleUrls: ['./e-bar-chart.component.css'],
})
export class EBarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public chartOption: EChartsOption = {
    legend: {},
    xAxis: { type: 'category' },
    yAxis: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017', '2018', '2019', '2020'],
        ['United Kingdom', 43.3, 85.8, 93.7,32.1,57.6],
        ['France', 83.1, 73.4, 55.1,34.1,26.2],
        ['Germany', 86.4, 65.2, 82.5,45.1,23.2],
      ],
    },
    series: [
      { type: 'bar', barGap: '20%', barCategoryGap: '30%',barWidth: '8%' },
      { type: 'bar' , barWidth: '8%' },
      { type: 'bar',barWidth: '8%'},
      { type: 'bar',barWidth: '8%'},      
      { type: 'bar',barWidth: '8%'},
      { type: 'bar',barWidth: '8%'},
    ],
  };
}
