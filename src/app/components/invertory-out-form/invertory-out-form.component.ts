import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/Main Service/service.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-invertory-out-form',
  templateUrl: './invertory-out-form.component.html',
  styleUrls: ['./invertory-out-form.component.css']
})
export class InvertoryOutFormComponent {

  name = "Angular";
  inventoryOutForm: FormGroup;
  

  from = new FormControl('', [Validators.required]);
  recivedBy = new FormControl('', [Validators.required]);
  recivedDate = new FormControl('', [Validators.required]);
  totalQty = new FormControl('', [Validators.required]);
  totalProduct = new FormControl('', [Validators.required, Validators.min(1)]);

  get From(): FormControl {
    return this.from as FormControl;
  }
  get RecivedBy(): FormControl {
    return this.recivedBy as FormControl;
  }
  get RecivedDate(): FormControl {
    return this.recivedDate as FormControl;
  }
  get TotalQty(): FormControl {
    return this.totalQty as FormControl;
  }
  get TotalProduct(): FormControl {
    return this.totalProduct as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private stockService: ServiceService,
    private router: Router, private snackBar: MatSnackBar
  ) {
    this.inventoryOutForm = this.fb.group({
      from: this.from,
      receivedBy: this.recivedBy,
      receivedDate: this.recivedDate,
      totalItem: this.totalProduct,
      totalqty: this.totalQty,
      inventoryOutItem: this.fb.array([]),
    });
  }



  errorMessage: string = '';

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  notification() {
    this.snackBar.open(this.message, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }


  logistic: any;
  pList: any;
  ngOnInit(): void {
    this.stockService.logisticsdata().subscribe((data: any) => {
      this.logistic = data;
    })
    this.stockService.product().subscribe((data: any) => {
      this.pList = data;
    })
  }
  pQty: any;
  productNamevalue(event: any) {
    // console.log(event)
    let myObjData = this.pList.find((f:any)=>f.productName==event);
    if(myObjData){
     let control= this.quantities.controls.find(f=>f.get('productName')?.value==event)

    //  control?control.get('totalQty')?.setValue(myObjData.totalQty):'';
     control?control.get('totalProduct')?.setValue(myObjData.productQty):'';
    }

  }


  get quantities() {
    return this.inventoryOutForm.get("inventoryOutItem") as FormArray;
  }
 
  addQuantity() {
    this.quantities.push(
      this.fb.group({
        productName: [''],
        totalProduct:[''],
        totalQty: ['']
      })
    );
  }
  removeQuantity(i: number) {
    this.quantities.removeAt(i);
  }
  userData: any;
  message: any;
  timer: any
  onSubmit() {
    let cont = this.quantities.controls.map((f:any)=>{
      f.removeControl(f.get('totalProduct'));
    })
    
    console.log(this.inventoryOutForm);
     
    this.stockService.addInventoryOut(this.inventoryOutForm.value).subscribe(
      (response: any) => this.message = response.message,
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.message = error.error.message;
        } else {
          this.errorMessage = 'An error occurred: ' + error.message;
          console.log(this.errorMessage);

        }
      }
    )

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.notification();

    }, 500)
  }




  allproductList: Array<any> = [];

  getAllProductListData() {

  }

}
