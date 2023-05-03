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
      receivedBy: "",
      receivedDate: "",
      totalItem: 0,
      totalqty: "",
      inventoryOutItem: this.fb.array([]),
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
    return this.productForm.get("inventoryOutItem") as FormArray;
  }
  newQuantity(): FormGroup {
    return this.fb.group({
      productName: "",
      totalQty: 0,
     
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
  message:any;
  onSubmit() {
    console.log(this.productForm.value);
    // this.stockService.addInventoryOut(this.productForm.value).subscribe((data:any)=>{
    //   this.message=data;
    // })
  }

  getAllStockes() {
    // this.stockService.getAllLogistics().subscribe((data) => {
    //   this.listin = data;
    // });
  }
  allproductList: Array<any> = [];

  getAllProductListData() {
    
  }

}
