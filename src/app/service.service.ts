import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getAllPosts(pageNumber: number, pageSize: number, fieldname: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private router:HttpClient) { }

  getAllData(pageNo:any,pageSize:any,field:any,sordDir:any){
    console.log("NITISH");
    
   return this.router.get(`/StockInInventory/inventory/item?pageNo=${pageNo}&pageSize=${pageSize}&field=${field}&sortDir=${sordDir}`);
  }
  postdata(data:any){
    return this.router.post(`/StockInInventory/add/inventory`,data);
  }
  findById(id:any){
    return this.router.get(`/StockInInventory/${id}`);
  }
  product(){
    return this.router.get(`/StockInInventory/findAllInventory`)
   
  }
  logisticsdata(){
    return this.router.get(`/StockInInventory/logistics/gell`)
  }
  postAllData(data:any){
    return this.router.post(`/StockInInventory/add/inventory`,data)
  }
  deleteData(id:any){
    return this.router.delete(`/StockInInventory/${id}`)
  }
  receiverfindAll(){
    return this.router.get(`/StockInInventory/receiver/findAll`)
  }
  approved(id:any){
    return this.router.get(`/StockInInventory/getProduct/approval?id=${id}&approval=true`)
  }

  addInventoryOut(data:any){
    return this.router.post(`/StockInInventory/InventoryOut/addData`,data);
  }
  getInventoryOutData(pageNo:any,pSize:any,field:any,sortDir:any){
    return this.router.get(`/StockInInventory/invertoryOut/findAll?pageNo=${pageNo}&pageSize=${pSize}&field=${field}&sortDir=${sortDir}`)
  }

  // findById(id:any){
  //   return this.router.get(`/StockInInventory/${id}`);
  // }

  getInventoryFindById(id:any){
    return this.router.get(`/StockInInventory/invertoryOut/findByFrom/${id}`);
  }
  getInventoryOutItem(id:any){
    return this.router.get(`/StockInInventory/invertoryOut/findByFrom/${id}`);
  }
  
}
