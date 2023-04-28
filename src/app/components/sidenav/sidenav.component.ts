import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() sideNavStatus:boolean=false;
list=[
  {
  number: '1',
  name:'home',
  link:'home',
  icon:'fa-solid fa-house',
  activeLink:'active',
  tooltip:"home"
  },
 
  {
  number: '2',
  link:'list-item',
  name:'Inventory-In',
  icon:'fa-solid fa-warehouse',
  tooltip:"Inventory-In"
  },
  {
  number: '3',
  link:'Invertory-out',
  name:'Invertory-out',
  icon:'fa-solid fa-truck-moving',
  tooltip:"Invertory-out"
  },
  {
  number: '4',
  name:'Invertory',
  link:'Invertory',

  icon:'fa-solid fa-bank',
  tooltip:"Invertory"
  },
  // {
  // number: '54',
  // name:'product-list',
  // link:'product-list',

  // icon:'fa-solid fa-list',
  // tooltip:"product-list"
  // },

]

}
