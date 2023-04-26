import { Component, Input } from '@angular/core';
// import {NgModel, Validators} from '@angular/forms';
import {FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invertory-in',
  templateUrl: './invertory-in.component.html',
  styleUrls: ['./invertory-in.component.css']
})
export class InvertoryInComponent {
  @Input() sideNavStatus:boolean=false;
  name = 'Angular';
  productForm: FormGroup;

  constructor(private fb:FormBuilder,
    private stockService:ServiceService,
    private router:Router ) 
    
    {
    this.productForm = this.fb.group({
      from:'',
      recivedBy:'',
      recivedDate:'',
      totalQty:'',
      totalProduct:'',
      totalPrice:'',
      isApproved:false,
      orderBy:'',
      orderDate:'',
      stockInventoryItems: this.fb.array([]) ,
    });
    
  }
  products:any;
  logistics:any;
  Receiver:any;
  ngOnInit(): void {
    this.stockService.logisticsdata().subscribe((data1:any)=>{
          this.logistics=data1;
    })
    this.stockService.receiverfindAll().subscribe((data:any)=>{
      this.Receiver=data;
    })
    this.stockService.product().subscribe((data:any)=>{
      // console.log(data);
      
      this.products=data;
    })
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
  quantities() : FormArray {
    return this.productForm.get("stockInventoryItems") as FormArray
  }
  newQuantity(): FormGroup {
    return this.fb.group({
      productName: '',
      productQty: '',
      price: '',
      totalPrice: '',
    })
  }
  addQuantity() {
    console.log(this.logistics);
    console.log(this.products);
    
    
    this.quantities().push(this.newQuantity());
  }
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
     userData:any;
  onSubmit() {
    console.log(this.productForm.value);
    this.userData=this.productForm.value;
    this.stockService.postAllData(this.productForm.value).subscribe((data:any)=>{
      this.userData=data;
    })
     this.router.navigate(['inventoryin']);
   
  }

  getAllStockes(){
    // this.stockService.getAllLogistics().subscribe(data=>{
    //   this.stockin=data;
    // });
  }



}
