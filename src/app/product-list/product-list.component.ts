import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private service:ServiceService,private router :ActivatedRoute){}
  pageSize:number=5;
  pageNumber:number=0;
  totalElement:any;
  totalpage:any
  fieldname:string="recivedDate";
  allData:any;
  sordDir:string='asc';
  stockin:any
  stockdata:any;
  id:any;
  ngOnInit(): void {
  this.id = this.router.snapshot.params['id'];
   
    this.service.findById(this.id).subscribe((data:any)=>{
      this.stockin=data;
      this.stockdata=data.stockInventoryItems;
      console.log(this.stockin);
      
      console.log(this.stockdata);
      
      this.totalpage=data.totalPages;
      this.totalElement=data.totalElements;
    })
  
  }
  pagination(value:any){
  console.log("hiii");
  
  console.log(value);
  this.pageSize=value;
  this.ngOnInit();
  }
  nextprev(type:string){
  if(type==='add' && this.pageNumber<this.totalpage){
    this.pageNumber++;
    this.ngOnInit();
  }
  if(type==='minus' && this.pageNumber>0){
    this.pageNumber--;
    this.ngOnInit();
  }
  if(type==='add' && this.pageNumber==this.totalpage){
    this.pageNumber=0;
    this.ngOnInit()
  }
  
  
  }
  

}
