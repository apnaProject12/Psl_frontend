import { Component, Input } from '@angular/core';
// import {NgModel, Validators} from '@angular/forms';
import {
  FormControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceService } from '../../Services/Main Service/service.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-invertory-in',
  templateUrl: './invertory-in.component.html',
  styleUrls: ['./invertory-in.component.css'],
})
export class InvertoryInComponent {
  @Input() sideNavStatus: boolean = false;
  name = 'Angular';
  value: string = 'submit';
  productForm: FormGroup;

  from = new FormControl('', [Validators.required]);
  recivedBy = new FormControl('', [Validators.required]);
  recivedDate = new FormControl('', [Validators.required]);
  totalQty = new FormControl('', [Validators.required , Validators.min(1)]);
  totalProduct = new FormControl('', [Validators.required, Validators.min(1)]);
  totalPrice = new FormControl('', [Validators.required, Validators.min(1)]);
  errorMessage: string="";

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
  get TotalPrice(): FormControl {
    return this.totalPrice as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private stockService: ServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) 
  
  {
    this.productForm = this.fb.group({
      from: this.from,
      recivedBy: this.recivedBy,
      recivedDate: this.recivedDate,
      totalQty: this.totalQty,
      totalProduct: this.totalProduct,
      totalPrice: this.totalPrice,
      isApproved: false,
      stockInventoryItems: this.fb.array([]),
    });
  }
  products: any;
  logistics: any;
  Receiver: any;

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
  ngOnInit(): void {
    // this.addQuantity();
    this.stockService.logisticsdata().subscribe((data1: any) => {
      this.logistics = data1;
    });
    this.stockService.receiverfindAll().subscribe((data: any) => {
      this.Receiver = data;
    });
    this.stockService.product().subscribe((data: any) => {
      // console.log(data);

      this.products = data;
    });
    // console.log(this.products);
    console.log(this.logistics);

    // if(localStorage.getItem('toogle')){
    // console.log('not toogle');

    // }
    // else{
    //   console.log("toogle");

    // }
    // throw new Error('Method not implemented.');
  }
  arrayLength: Number = 0;
  quantities(): FormArray {
    return this.productForm.get('stockInventoryItems') as FormArray;
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      productName: '',
      productQty: '',
      price: '',
      totalPrice: '',
    });
  }
  name2: string = 'nitish';
  product: Number = 3;
  message: any;

  productNumber = 0;
  productvalue(id: any) {
    this.productNumber = id;
  }

  addQuantity() {
    let Array = this.productForm.get('stockInventoryItems') as FormArray;
    let Arraylength = Array.controls.length;
    if (Arraylength < this.productNumber) {
      this.quantities().push(this.newQuantity());
    } else {
      this.message = 'product data enough !!';
      this.notification();
    }
  }
  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }
  userData: any;
  timer:any;
  onSubmit() {
    let Array = this.productForm.get('stockInventoryItems') as FormArray;
    let Arraylength = Array.controls.length;
    console.log(` Array length :${Arraylength}`);
    let product = this.productForm.value.totalProduct;
    console.log(` product :${product}`);

    this.value = 'submit';
    console.log(this.productForm.value);
    this.userData = this.productForm.value;
    if (product == Arraylength) {
      this.stockService
        .postAllData(this.productForm.value).subscribe(
          (response: any) => {
            this.message = response.message;
            this.router.navigate(['/dashboard/list-item'])
          }
          
          ,
          (error: HttpErrorResponse) => {
            if (error.status === 400) {
              this.message = error.error.message;
            } else {
              this.errorMessage = 'An error occurred: ' + error.message;
              console.log(this.errorMessage);
    
            }
          }
        )
        
        
      }
      else{
        this.message="add product data";
      }

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.notification();
        
      }, 500)

  }
  getdata(val2:any){
    console.log(`value 1 = ${this.box1data},value 2 =${val2}`);
    
  }
  box1data:any;
  Box1(data:any){
    this.box1data=data;
    console.log(this.box1data);
    
    
  }

  getAllStockes() {
    // this.stockService.getAllLogistics().subscribe(data=>{
    //   this.stockin=data;
    // });
  }
}
