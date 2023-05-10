import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ServiceService } from '../../Services/Main Service/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inventorydata:any;
  timer:any;
  constructor(private service:ServiceService){}
  chartData : any[] = [];
  chartDatalabels : any[] = [];
  ngOnInit(): void {
    this.service.product().subscribe((data:any)=>{
      this.inventorydata=data;
            this.inventorydata.forEach((element:any) => {
        this.chartData.push(element.productQty);
        this.chartDatalabels.push(element.productName);
        
      });
          })
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const data = {
        labels: this.chartDatalabels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: ['red', 'yellow', 'green','pink','aqua','grey'],
            hoverBackgroundColor: ['red', 'yellow', 'green','pink','aqua','grey'],
          }
        ]
      };
      
      const options = {
        responsive: true,
        maintainAspectRatio: false
      };
      
      const pieChart = new Chart('pieChart', {
        type: 'pie',
        data: data,
        options: options
      });

    }, 500)
  
    this.createChart();

    
  }
  public chart: any;
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  
  
  }

  


