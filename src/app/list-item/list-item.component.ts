import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent  {
  constructor(private service:ServiceService,private router :Router){}
  pageSize:number=5;
  pageNumber:number=0;
  totalElement:any;
  totalpage:any
  fieldname:string="recivedDate";
  allData:any;
  sordDir:string='asc';
  stockin:any
  condition:string='true';
  
  ngOnInit(): void {
   
    
    this.service.getAllData(this.pageNumber,this.pageSize,this.fieldname,this.sordDir).subscribe((data:any)=>{
      this.stockin=data.content;
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
findproduct(id:any){
 this.router.navigate(['/dashboard/product-list',id]);
}
  
  
  advanceSearch(name:any,email:any,phone:any,city:any,purpose:any,doctor:any,visitingdate:any,appointmentdate:any){
    
  
  }
  timer:any
  pageWithData(event:any){
   console.log("event :"+event);
   clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
     this.pageNumber=event-1
     this.ngOnInit();
     
      
    },1000)
  
   
  }
  deleteData(){
    // console.log("id :"+id );
    
   
  
    // this.ngOnInit();
  }
  // deleteData(id:number){
  //   console.log("id :"+id );
    
  //   this.service.deleteById(id,this.pageNumber,this.pageSize,this.fieldname).subscribe((data:any)=>this.allData=data.content)
  
  // }
  update(id:any){
  // this.router.navigate
  console.log("id :"+id);
  
  this.router.navigate(['dashboard/update',id] );
  }
  opened=false;
  
  globalSearch(data:any){
    console.log("data ="+data);
    
  if(data !=='' ){
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      // this.service.globalSearch(data).subscribe(value=>{
      
      //   this.allData=value
      // })
     
      
    },1000)
  }
  else{
    console.log("else work");
    
    this.ngOnInit();
  }
  }
  
  value:any
  deleteData1(id:any){
this.service.deleteData(id).subscribe((data:any)=>{
  this.value=data;
  this.ngOnInit();
})
  }
  
  

 
}