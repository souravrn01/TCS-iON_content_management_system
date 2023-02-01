import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-auth-user-login',
  templateUrl: './auth-user-login.component.html',
  styleUrls: ['./auth-user-login.component.css']
})
export class AuthUserLoginComponent implements OnInit {

  constructor(private api: HeroService, private route: Router) { }
status:any
data:any
LoginForm:any = new FormGroup({
  'email': new FormControl('',[Validators.required,Validators.email]),
  'password': new FormControl('',[Validators.required])
})

  ngOnInit(): void {
    this.status = true
  }

  onSubmit(){ 
    if(this.LoginForm.status != "INVALID"){
      this.status = true
      this.api.login(this.LoginForm.value).subscribe(res=>{
        if(res !== null){
          this.data = res
          sessionStorage.removeItem('user')
          sessionStorage.setItem('user',JSON.stringify(this.data.name))
          this.route.navigateByUrl('/userhome')
        }else{
          alert("Not an authenticated user")
        }
      })
    }else{
      this.status = false
    }
  }


}
 