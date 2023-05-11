import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login Service/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router:Router,private service:LoginServiceService){}
name:any;
  ngOnInit(): void {
   this.name= localStorage.getItem("name");
    throw new Error('Method not implemented.');
  }
  @Output() sideNavToggled =new EventEmitter<boolean>
  menustatus:boolean=false;
  sidenavtoggle(){
    localStorage.setItem('toogle',String(this.menustatus))
    this.menustatus=!this.menustatus;
    this.sideNavToggled.emit(this.menustatus);
  }


  remove(){
    this.service.logOut();
    this.router.navigate([''])
  }

}
