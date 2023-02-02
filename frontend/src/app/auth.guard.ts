import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:HeroService,private router:Router){}

  canActivate():boolean{
    if(this.service.loggedIn())
      {
        return true
      }else{
        this.router.navigateByUrl('/forbidden')
        return false
      }
  }
 
  
}
