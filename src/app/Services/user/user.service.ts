import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(`/StockInInventory/api/security/getAllUser`);
  }

  signUpUsers(data:any){
    return this.http.post(`/StockInInventory/api/security/updatenew`,data);
  } 
}
