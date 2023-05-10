import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/Main Service/service.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-invertory',
  templateUrl: './invertory.component.html',
  styleUrls: ['./invertory.component.css']
})
export class InvertoryComponent implements OnInit {

  constructor(private service :ServiceService,private snackBar: MatSnackBar){ }
  productList:any
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  product={
    "productName":"",
    "productQty":0
}
  ngOnInit(): void {
    this.service.product().subscribe((data:any)=>{
       this.productList=data;
    })
  }

  notification() {
    this.snackBar.open(this.message, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }


  getData(){
    console.log("Hii");
    
  }
  timer:any;
  message:any;
  addProduct(value:any){
    if (value!="") {
      
    
   this.product.productName=value;
    this.service.postproductData(this.product).subscribe((data:any)=>{
this.message=data.message;
    })
  }
  else{
    this.message="data should not be null"
  }
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.notification();
      
    }, 500)
    this.ngOnInit();


  }

}
