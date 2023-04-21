import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  // { path: '/inventoryin',     title: 'Inventory In',         icon:'nc-bank',       class: '' },
  // { path:'/inventoryform',    title : 'Form',                icon:'nc-bank',       class:''}
  
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

sideNavStatus:boolean=false
    ngOnInit() {
      
    }
  }
