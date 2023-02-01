import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-auth-user-signup',
  templateUrl: './auth-user-signup.component.html',
  styleUrls: ['./auth-user-signup.component.css']
})
export class AuthUserSignupComponent implements OnInit {

  constructor(private api: HeroService, private route: Router) { }
 status:any

  userSignup: any = new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'phone': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'password': new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
    this.status = true
  }

  onSubmit(){
    if(this.userSignup.status != "INVALID"){
      this.status = true
      console.log(this.userSignup);
      this.api.register(this.userSignup.value).subscribe(res=>{
        console.log(res, 'from database');
        window.alert('registerd')      
        this.route.navigateByUrl('/authUser')
      })
    }else{
      this.status = false
    }
    
  }

}
