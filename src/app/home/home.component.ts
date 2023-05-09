import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ServiceService } from '../service.service';

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
  
    

    
  }
  
  
  }

  


