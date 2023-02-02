import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  constructor(private api: HeroService, private router: Router) { }

  AdminForm:any = new FormGroup({
    'email': new FormControl('',[Validators.required,Validators.email]),
    'password': new FormControl('',[Validators.required])
})

  status:any 
  data:any
  ngOnInit(): void {   
    this.status = true
  }


onSubmit(){
  if(this.AdminForm.status != "INVALID"){
    this.api.AdminLogin(this.AdminForm.value).subscribe(res=>{
      if(res !== null){
        this.data = res
        localStorage.setItem('token',this.data.token)
        sessionStorage.clear()
        sessionStorage.setItem('user',JSON.stringify(this.data.data.name))
        sessionStorage.setItem('admin',JSON.stringify("true"))
        this.router.navigateByUrl('/roothome')
      }else{
   alert('You are not an Admin')
      }
    })
  }else{
    this.status = false
  }
  
}
}
 