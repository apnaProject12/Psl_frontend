import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/Main Service/service.service';

@Component({
  selector: 'app-invertory-out',
  templateUrl: './invertory-out.component.html',
  styleUrls: ['./invertory-out.component.css'],
})
export class InvertoryOutComponent implements OnInit {
  constructor(private router: Router, private service: ServiceService) {}

  inventoryOut: any;
  pageSize: number = 5;
  pageNumber: number = 0;
  totalElement: any;
  totalpage: any;
  fieldname: string = 'id';
  allData: any;
  sordDir: string = 'asc';
  ngOnInit(): void {
  this.service.getInventoryOutData(this.pageNumber,this.pageSize,this.fieldname,this.sordDir).subscribe((data:any)=>{
    this.inventoryOut=data.content;
    this.totalpage = data.totalPages;
        this.totalElement = data.totalElements;
  })
  }

  nextprev(type: string) {
    if (type === 'add' && this.pageNumber < this.totalpage) {
      console.log("add");
      
      this.pageNumber++;
      this.ngOnInit();
    }
    if (type === 'minus' && this.pageNumber > 0) {
      console.log("minus");
      
      this.pageNumber--;
      this.ngOnInit();
    }
    if (type === 'add' && this.pageNumber == this.totalpage) {
      this.pageNumber = 0;
      this.ngOnInit();
    }
  }

  findinventoryitem(id:any){
    console.log(id);
    
    this.router.navigate(['/dashboard/inventory-out-item',id]);
  }

  getAllInventoryOutItem(){

  }

}
