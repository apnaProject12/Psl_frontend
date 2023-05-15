import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login Service/login-service.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(private service:LoginServiceService,private router:Router,private snackBar: MatSnackBar){}
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  login={
    "username":"",
    "password":""
  }
  ngOnInit(): void {
    //fgbhjfgh
  }
  message:any;
  Dologin(){
    console.log(this.login);
    this.service.logOut();
    if (this.login.password !="" && this.login.username !="") {
      this.service.dologin(this.login).subscribe((data:any)=>{
        localStorage.setItem("token",data.token);
        localStorage.setItem("role",data.role);
        localStorage.setItem("name",data.user)
        console.log("this project was stock management system");
        
        setTimeout(()=>{
          this.router.navigate(['/dashboard/list-item']);
        },700)
        
        },(error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.message = error.error.message;
          } else {
            this.message="something went wrong";
  
          }
        }
        )

      }
      
    
    else {

      this.message="please ! add data";
      this.notification();
      
      
    }
  }

  notification() {
    this.snackBar.open(this.message, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
  
    
    
}
