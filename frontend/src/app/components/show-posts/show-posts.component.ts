import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  constructor(private api: HeroService, private activated: ActivatedRoute,private sanitizer: DomSanitizer) { }


store:any
data: any ={
  id:'',
  category: ''
}
content:any

  ngOnInit(): void {
    this.Onload()
    this.getContent()
  }
  Onload(){
    this.activated.paramMap.subscribe(params=>{
     this.data.id = params.get('id')
     this.data.category = params.get('category')
    })
   }

   function(){
    history.back()
  }

  getContent(){
    this.api.getContent(this.data).subscribe(res=>{
      this.store = res
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.store.content)
      console.log(this.store);
    })
  }
} 
