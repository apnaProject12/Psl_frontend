import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent  {
  openModel = {
    create: false
  }
  heading: any;
  @ViewChild('myModal')
  myModal!: ElementRef;

  constructor(private service:ServiceService) { }
  stockin:any;
  ngOnInit(): void {
    this.service.getAllData().subscribe((data:any)=>{
      this.stockin=data;
    })
    // this.getAllStockes();
  }

  // stockin?:Stockin[];

  openModal() {
    this.myModal.nativeElement.classList.add('show');
    this.myModal.nativeElement.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.myModal.nativeElement.classList.remove('show');
    this.myModal.nativeElement.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  

 

  open(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='block';
    }
  }
  close(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='none';
    }
  }

  productList(id:any){
console.log(id);
  //  this.router.navigate(['inventoryout',id])
  }

}
