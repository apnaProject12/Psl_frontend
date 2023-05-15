import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.css']
})
export class UserModuleComponent implements OnInit{
 
  constructor(private userService:UserService){ }
  userList:any

  ngOnInit(): void {
    this.getAllUser();
  }
  userData={
    "name":"",
    "phone":'',
    "email":"",
    "password":"",
    "role":""
  }

  getAllUser(){
    this.userService.getUser().subscribe((data:any)=>{
      this.userList=data;
      for (const iterator of this.userList) {
        console.log(iterator.id);
        
      }
    })
  }

  signUp(){
    

  }




}
