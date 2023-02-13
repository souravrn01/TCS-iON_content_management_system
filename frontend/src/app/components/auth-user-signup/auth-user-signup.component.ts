import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{RxwebValidators} from '@rxweb/reactive-form-validators';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-auth-user-signup',
  templateUrl: './auth-user-signup.component.html',
  styleUrls: ['./auth-user-signup.component.css']
})
export class AuthUserSignupComponent implements OnInit {

  constructor(private api: HeroService, private route: Router) { }
 show:any

  userSignup: any = new FormGroup({
    'name': new FormControl('',[Validators.required, RxwebValidators.minLength({value:5 })]),
    'phone': new FormControl('',[Validators.required,RxwebValidators.digit(),RxwebValidators.minLength({value:9})]),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'password': new FormControl('',[Validators.required,RxwebValidators.password({validation:{maxLength: 20,minLength: 5,digit: true,specialCharacter: true} })])
  })
  ngOnInit(): void { 
    this.show = false
  } 

  onSubmit(){
    console.log(this.userSignup.controls.name.valid)
    if(this.userSignup.valid){
      this.show = false
      console.log(this.userSignup);
      this.api.register(this.userSignup.value).subscribe(res=>{
        console.log(res, 'from database');
        window.alert('registerd')      
        this.route.navigateByUrl('/authUser')
      })
    }else{
      this.show = true
    }
    
  }

}
