import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private api:HeroService, private route:Router) { }
  category:any={}
 postDatas:any
 headlineArr:any
  ngOnInit(): void {
    this.activated.paramMap.subscribe(params=>{
      this.category.category = params.get('category')    
    this.getPosts(this.category)
     })
  }

  getPosts(cat:any){
    this.api.getPostsUndercategory(cat).subscribe(res=>{
     this.postDatas = res
     this.headlineArr = this.postDatas.posts
    })
  }
 
  view(id:any){
    console.log(id);
    this.route.navigateByUrl(`/show/${id}/${this.category.category}`)
}
}
