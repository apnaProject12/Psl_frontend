import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService ,} from 'src/app/service.service';

@Component({
  selector: 'app-inventory-out-item',
  templateUrl: './inventory-out-item.component.html',
  styleUrls: ['./inventory-out-item.component.css']
})
export class InventoryOutItemComponent implements OnInit{

  constructor(private service:ServiceService,private route:ActivatedRoute){ }
  id:any;

  itemList:any
  item:any;
  ngOnInit(): void {

   this.id= this.route.snapshot.params['id'];
   console.log(this.id);
   this.service.getInventoryOutById(this.id).subscribe((data:any)=>{
    this.itemList=data.inventoryOutItem;
    this.item=data;

   })

   
    
  }

}
