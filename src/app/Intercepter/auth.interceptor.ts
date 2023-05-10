import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request);
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptor");
    

    const localToken=localStorage.getItem("token");
    console.log(`local Storage :${localToken}`);
    if(localToken !==null){
    
      request=request.clone({headers:request.headers.set('Authorization','Bearer '+localToken)});
      console.log("request :"+request);

    }
    
    return next.handle(request);

  }
  }

