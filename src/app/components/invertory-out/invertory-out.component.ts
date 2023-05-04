import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-invertory-out',
  templateUrl: './invertory-out.component.html',
  styleUrls: ['./invertory-out.component.css'],
})
export class InvertoryOutComponent implements OnInit {
  constructor(private router: Router, private service: ServiceService) {}

  inventoryOut: any;

  ngOnInit(): void {}

  findinventoryitem(){
    this.router.navigate(['/dashboard/inventory-out-item']);
  }
}
