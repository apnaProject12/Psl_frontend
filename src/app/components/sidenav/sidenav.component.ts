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
  name:'item-list',
  icon:'fa-solid fa-list',
  tooltip:"item-list"
  },
  {
  number: '3',
  link:'invertory-in',
  name:'Add-invertory',
  icon:'fa-solid fa-bank',
  tooltip:"Add-invertory"
  },
  {
  number: '4',
  name:'about',
  link:'about',

  icon:'fa-solid fa-circle-info',
  tooltip:"about"
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
