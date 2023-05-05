import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  constructor(
    private service: ServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  pageSize: number = 10;
  pageNumber: number = 0;
  totalElement: any;
  totalpage: any;
  fieldname: string = 'recivedDate';
  allData: any;
  sordDir: string = 'asc';
  stockin: any;
  condition: string = 'true';

  logistics: any;
  Receiver: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 5;
  message: string = '';
  role_Admin = false;

  notification() {
    this.snackBar.open(this.message, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

  approval_id: any;
  apporovedHere(id: any) {
    this.approval_id = id;
  }
  approval() {
    this.service.approved(this.approval_id).subscribe((data: any) => {
      this.message = data.message;
    });
    this.ngOnInit();
    this.notification();
  }

  ngOnInit(): void {
    if (localStorage.getItem('role') === 'admin') {
      this.role_Admin = true;
    } else {
      this.role_Admin = false;
    }
    this.service.receiverfindAll().subscribe((data: any) => {
      this.Receiver = data;
    });
    this.service.logisticsdata().subscribe((data1: any) => {
      this.logistics = data1;
    });
    this.getAllData();
  }
  getAllData() {
    this.service
      .getAllData(this.pageNumber, this.pageSize, this.fieldname, this.sordDir)
      .subscribe((data: any) => {
        this.stockin = data.content;
        this.totalpage = data.totalPages;
        this.totalElement = data.totalElements;
      });
  }

  pagination(value: any) {
    console.log('hiii');

    console.log(value);
    this.pageSize = value;
    this.ngOnInit();
  }
  nextprev(type: string) {
    if (type === 'add' && this.pageNumber < this.totalpage) {
      this.pageNumber++;
      this.ngOnInit();
    }
    if (type === 'minus' && this.pageNumber > 0) {
      this.pageNumber--;
      this.ngOnInit();
    }
    if (type === 'add' && this.pageNumber == this.totalpage) {
      this.pageNumber = 0;
      this.ngOnInit();
    }
  }
  findproduct(id: any) {
    this.router.navigate(['/dashboard/product-list', id]);
  }

  advanceSearch(
    name: any,
    email: any,
    phone: any,
    city: any,
    purpose: any,
    doctor: any,
    visitingdate: any,
    appointmentdate: any
  ) {}
  timer: any;
  pageWithData(event: any) {
    console.log('event :' + event);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.pageNumber = event - 1;
      this.ngOnInit();
    }, 1000);
  }
  deleteData() {
    // console.log("id :"+id );
    // this.ngOnInit();
  }
  // deleteData(id:number){
  //   console.log("id :"+id );

  //   this.service.deleteById(id,this.pageNumber,this.pageSize,this.fieldname).subscribe((data:any)=>this.allData=data.content)

  // }
  update(id: any) {
    // this.router.navigate
    console.log('id :' + id);

    this.router.navigate(['dashboard/update', id]);
  }
  opened = false;

  globalSearch(data: any) {
    console.log('data =' + data);

    if (data !== '') {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        // this.service.globalSearch(data).subscribe(value=>{
        //   this.allData=value
        // })
      }, 1000);
    } else {
      console.log('else work');

      this.ngOnInit();
    }
  }
  id: any;
  delete(data: any) {
    this.id = data;
  }

  value: any;
  errorMessage:string="";
  deleteData1() {
    this.service.deleteData(this.id).subscribe((data: any) => {
      this.message = data.message;
      this.ngOnInit();

  },(error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.message = error.error.message;
    } else {
      this.errorMessage = 'An error occurred: ' + error.message;
      console.log(this.errorMessage);

    }
  }
  
  )
}
}
