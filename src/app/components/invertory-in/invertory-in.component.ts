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
      productQty: Number,
      price: Number,
      totalPrice: Number,
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
      else if(product < Arraylength){
        this.message="remove product data";
      }
      else{
        this.message="add product data";
      }

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.notification();
        
      }, 500)

  }
  val2:any;
  getdata(data:any){
this.val2=data;
setTimeout(() => {
  this.multipleProductvalue();
}, 500);

  }

  multipleProductvalue(){    
   let value= this.productForm.get("stockInventoryItems") as FormArray;
   let sss= value.controls.find(f=>f.get("price")?.value==this.val2 && f.get("productQty")?.value==this.box1data);
   sss?.get("totalPrice")?.setValue(this.val2*this.box1data);   
   if (this.box1data >0 && this.val2 >0) {
     value.get("totalPrice")?.setValue(this.box1data*this.val2); 
   } else {
    console.log("not found");
    
    value.get("totalPrice")?.setValue(0); 
    
   }
  }

  box1data:any;
  Box1(data:any){ 
    this.box1data=data;
    setTimeout(() => {
      this.multipleProductvalue();
    }, 500); 
  }

  getAllStockes() {
    // this.stockService.getAllLogistics().subscribe(data=>{
    //   this.stockin=data;
    // });
  }
}
