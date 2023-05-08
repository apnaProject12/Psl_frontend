import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-invertory',
  templateUrl: './invertory.component.html',
  styleUrls: ['./invertory.component.css']
})
export class InvertoryComponent implements OnInit {

  constructor(private service :ServiceService){ }
  productList:any
  ngOnInit(): void {
    this.service.product().subscribe((data:any)=>{
       this.productList=data;
    })
  }

  getData(){
    console.log("Hii");
    
  }

}
