import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req:any,nxt:any){
    let service = this.injector.get(HeroService)
    let tokenizedReq = req.clone({
      setHeaders:{Authorization:`Bearer ${service.getToken()}`}
    })
    return nxt.handle(tokenizedReq)
  }
}
