import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private api:HeroService, private route: Router) { }
categories:any = [];
  postDatas:any
  headlineArr:any = []
   mainId:any
store:any    
   update:any ={
     category: '',
     id:'',
     name:'',
   }
 
  ngOnInit(): void {
    this.update.name = JSON.parse(sessionStorage.getItem("user")as string)
    this.getPosts(this.update.name)
  }

  getPosts(name:any){   
    this.headlineArr.length = 0;         
    this.api.getUserPosts(name).subscribe(res=>{
      this.postDatas = res
       this.postDatas.forEach((item:any)=>{
         item.posts.filter((e:any)=>{
            if(e.publishedby == this.update.name){
                this.headlineArr.push({...e, category: item.name})
            }
        })
      })
      console.log('api called:', this.headlineArr,);
    })
  }

  delete(id:any, category:any){
    if(window.confirm('click OK to confirm')){
      this.update.id = id;
      this.update.category = category
      this.api.deletePost(this.update).subscribe(res=>{
        this.ngOnInit()
      })
    }
 }

  edit(id:any, category:any){
    this.update.id = id;
    this.update.category = category
    this.route.navigateByUrl(`/edit/${this.update.id}/${this.update.category}`)
  }
  out(){
    sessionStorage.clear()
    this.route.navigateByUrl('/')
  }

  close(){
    this.categories.length = 0
    
  }

  saveCat(cat:any){
    console.log(cat)
    this.route.navigateByUrl(`/post/${cat}`)
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
}
