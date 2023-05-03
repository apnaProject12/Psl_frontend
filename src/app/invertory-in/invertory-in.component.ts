import { Component, Input } from '@angular/core';
// import {NgModel, Validators} from '@angular/forms';
import {
  FormControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

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
  totalQty = new FormControl('', [Validators.required]);
  totalProduct = new FormControl('', [Validators.required, Validators.min(1)]);
  totalPrice = new FormControl('', [Validators.required, Validators.min(1)]);

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
        .postAllData(this.productForm.value)
        .subscribe((data: any) => {
          this.userData = data;
        });
      if (this.userData != null) {
        this.message = 'data inserted successfully';
        this.notification();
        this.value = 'reset';
      } else {
        this.message = 'something went wrong';
        this.notification();
      }
    } else if (product > Arraylength) {
      this.message = 'Please add product !!';
      this.notification();
    } else {
      this.message = 'please remove product !!';
      this.notification();
    }
  }

  getAllStockes() {
    // this.stockService.getAllLogistics().subscribe(data=>{
    //   this.stockin=data;
    // });
  }
}
