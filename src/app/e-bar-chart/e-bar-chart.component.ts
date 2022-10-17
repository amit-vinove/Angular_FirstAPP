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
    title: {
      text: 'Analogue:'
    },
    legend: {},
    xAxis: { type: 'category'},
    yAxis: {      type: 'value',
    axisLabel: {
      formatter: '${value}'
    },
    min:3000
  },
    dataset: {
      source: [
        ['product', '2015', '2016', '2017', '2018', '2019', '2020'],
        ['United Kingdom', 3800, 5200, 3904,4000,5200],
        ['France', 4381, 7324, 5531,4401,6602],
        ['Germany', 5314, 6562, 7295,4531,7352],
      ],
    },
    series: [
      { type: 'bar', barGap: '20%', barCategoryGap: '20%',barWidth: '8%' },
      { type: 'bar' , barWidth: '8%' },
      { type: 'bar',barWidth: '8%'},
      { type: 'bar',barWidth: '8%'},      
      { type: 'bar',barWidth: '8%'},
      { type: 'bar',barWidth: '8%'},
      
    ],
  };
}
