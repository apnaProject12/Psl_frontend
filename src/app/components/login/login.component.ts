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
    
  }
  message:any;
  Dologin(){
    console.log(this.login);
    if (this.login.password !="" && this.login.username !="") {
      this.service.dologin(this.login).subscribe((data:any)=>{
        localStorage.setItem("token",data.message);
        },(error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.message = error.error.message;
          } else {
            this.message="something went wrong";
  
          }
        }
        )

        this.router.navigate(['/dashboard/home']);
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
