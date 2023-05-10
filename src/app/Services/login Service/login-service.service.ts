import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:HttpClient) { }
dologin(data:any){
return this.router.post(`/StockInInventory/api/security/authenticate`,data);
}
logOut(){
  localStorage.removeItem("token");
}
getToken(){
  return localStorage.getItem("token");
}

}
