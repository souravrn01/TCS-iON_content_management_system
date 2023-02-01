import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html', 
  styleUrls: ['./update-posts.component.css']
})
export class UpdatePostsComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private api:HeroService, private route:Router) { }
 postDatas:any
 headlineArr:any
  mainId:any 
 
  update:any ={
    category: '',
    id:''
  }

  ngOnInit(): void {
   this.activated.paramMap.subscribe(params=>{
    this.update.category = params.get('category')
    this.getPosts(this.update)
   })
  }
 
  getPosts(cat:any){
    this.api.getPostsUndercategory(cat).subscribe(res=>{
     this.postDatas = res
     this.headlineArr = this.postDatas.posts
     this.mainId = this.postDatas._id
    })
  }

  delete(id:any){
  if(window.confirm('click ok to confirm')){
    this.update.id = id
    this.api.deletePost(this.update).subscribe(res=>{
      this.ngOnInit()
    })
  }
  }

  edit(id:any){
    this.update.id = id
    this.route.navigateByUrl(`/edit/${this.update.id}/${this.update.category}`)
  }
}
