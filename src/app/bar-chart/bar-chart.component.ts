import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit,AfterViewInit {

  constructor() {
    Chart.register(...registerables);
}
  ngAfterViewInit(): void {
    // this.createChart();
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.createChart();
  }

  public chart:any;
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	       datasets: [
          {
            label: "United Kingdom", //label for the data set
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: '#0d6efd'
          },
          {
            label: "France",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  ,
          {
            label: "Germany",
            data: ['649', '545', '538', '322', '19',
									 '0.00', '538', '541'],
            backgroundColor: '#dc3545'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
