import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-root-login',
  templateUrl: './root-login.component.html',
  styleUrls: ['./root-login.component.css']
})
export class RootLoginComponent implements OnInit { 

  constructor(private api: HeroService, private router: Router) { }

  loginForm = new FormGroup({
    'email': new FormControl('',[Validators.required,Validators.email]), 
    'password': new FormControl('',[Validators.required])
  })

  status:any 
  ngOnInit(): void {
    this.status = true
  }
 
  onSubmit(){
    if(this.loginForm.status != "INVALID"){
      this.status = true
      this.api.rootlogin(this.loginForm.value).subscribe(res=>{
        if(Object.values(res)[0] === "matching"){
        sessionStorage.removeItem('user')
          sessionStorage.setItem('user',JSON.stringify("Root User"))
          this.router.navigateByUrl('/roothome')
          
        }else{
          //! show error
          alert("YOU ARE NOT AUTHORIZED TO LOGIN")
        }
      })
    }else{
      this.status = false
    }
  }

}
 