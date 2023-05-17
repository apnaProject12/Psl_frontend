import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/Main Service/service.service';
import { LoginServiceService } from 'src/app/Services/login Service/login-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() sideNavStatus:boolean=false;
  constructor(private service:LoginServiceService,private router:Router){ }
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
  {
    number:'5',
    name:'User Module',
    link:'user-module',
    icon:'fa-solid fa-users',
    tooltip:"User Module"
  },
  {
    number:'6',
    name:'Supplier Details',
    link:'supplierdertails',
    icon:'fas fa-industry',
    tooltip:'Supplier Details'
  }
  
  
]
icon:string='fa fa-sign-out'
logout(){
  this.service.logOut();
  this.router.navigate([""])

}

}
