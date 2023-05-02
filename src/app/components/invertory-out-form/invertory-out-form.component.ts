import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-invertory-out-form',
  templateUrl: './invertory-out-form.component.html',
  styleUrls: ['./invertory-out-form.component.css']
})
export class InvertoryOutFormComponent {

  name = "Angular";
  productForm: FormGroup;

  TodayDate ="2023-05-02";

  constructor(
    private fb: FormBuilder,
    private stockService: ServiceService,
    private router: Router,
  ) {
    this.productForm = this.fb.group({
      from: "",
      recivedBy: "",
      recivedDate: "",
      totalQty: "",
      totalProduct: "",
      totalPrice: "",
      isApproved: "",
      stockInventoryItems: this.fb.array([]),
    });
  }

  

  // stockin?: Stockin[];
  // listin?: List[];

  ngOnInit(): void {
    // this.getAllStockes();
    // console.log(this.listin);
    
    // this.getAllProductListData();
  }


  quantities(): FormArray {
    return this.productForm.get("stockInventoryItems") as FormArray;
  }
  newQuantity(): FormGroup {
    return this.fb.group({
      productName: "",
      productQty: "",
      price: "",
      totalPrice: "",
    });
  }
  addQuantity() {
    this.quantities().push(this.newQuantity());
    this.getAllProductListData();
  }
  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }
  userData: any;
  onSubmit() {
    console.log(this.productForm.value);
    // this.userData = this.productForm.value;
    // this.stockService
    //   .postdata(this.productForm.value)
    //   .subscribe((data: any) => {
    //     this.userData = data;
    //     console.log(this.userData);

    //     this.router.navigate(["inventoryin"]);
    //   });
  }

  getAllStockes() {
    // this.stockService.getAllLogistics().subscribe((data) => {
    //   this.listin = data;
    // });
  }
  allproductList: Array<any> = [];

  getAllProductListData() {
    // this.stockService.getAllProductList().subscribe((data) => {
    //   this.allproductList = data;
    // });
  }

}
