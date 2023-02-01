import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css']
})
export class ManagePostsComponent implements OnInit {

  constructor(private api: HeroService, private route: Router) { }
  home:boolean = false
  categories:any=[]
  store:any 
  ngOnInit(): void {
  this.getCat()
  } 
  
  
getPosts(data:any){
  this.route.navigateByUrl(`/managePosts/updatePosts/${data}`)
}

getCat(){
  this.api.getcategory().subscribe(res=>{
    this.store = res
    this.store.forEach((element: any) => {
    this.categories.push(element.name)
  })
  console.log(this.categories);
})
}

function(){
  history.back()
}

}
