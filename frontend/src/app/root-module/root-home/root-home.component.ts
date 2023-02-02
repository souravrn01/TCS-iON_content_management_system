import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-root-home',
  templateUrl: './root-home.component.html',
  styleUrls: ['./root-home.component.css']
})
export class RootHomeComponent implements OnInit {

  constructor(private api: HeroService, private router: Router) { }
  user:any 
update:any={}
store:any  
categories:any = [];
isThere:boolean = false
category:String = ''
editCategory:String =''

  ngOnInit(): void { 
    this.showcat()
    this.user = JSON.parse(sessionStorage.getItem("user")as string)
    console.log(this.user);
  }

  
  createCategory(){
    this.api.postcategory(this.category).subscribe(res=>{
      console.log(res);
      this.ngOnInit()
    })
  }

  getCat(){
    this.categories.length = 0
    this.api.getcategory().subscribe(res=>{
       this.store = res
       console.log(this.store)
      this.store.forEach((element: any) => {
        this.categories.push(element.name)
      })
      console.log(this.categories);
      
    }) 
  }

  closecat(){
    this.update.id = ''
    this.editCategory = ''
  }

  showcat(){
    this.categories.length = 0
    this.api.getcategory().subscribe(res=>{
       this.store = res
       console.log(this.store)    
    }) 
  }

  close(){
    this.categories.length = 0
  }

  out(){
    sessionStorage.clear()
    localStorage.removeItem('token')
  }
  
  saveCat(cat:any){
    console.log(cat)
    this.router.navigateByUrl(`/post/${cat}`)
  }


del(id:any){
  if(window.confirm("This will delete all posts under this category")){
    this.api.delCat(id).subscribe(res=>{
      console.log(res);
      this.ngOnInit()
    })
  }


  }
  edit(id:any){
    this.update.id = id
  }

  updateCat(){
    this.update.name = this.editCategory 
    this.api.editCat(this.update).subscribe(res=>{
      this.ngOnInit()
      this.closecat()
    })
  }
}
