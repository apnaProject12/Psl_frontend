import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-inventory-out-item',
  templateUrl: './inventory-out-item.component.html',
  styleUrls: ['./inventory-out-item.component.css']
})
export class InventoryOutItemComponent implements OnInit{

  constructor(private service:ServiceService){ }

  ngOnInit(): void {
    
  }

}
