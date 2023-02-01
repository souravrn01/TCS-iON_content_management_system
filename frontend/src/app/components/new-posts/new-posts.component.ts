import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.css']
})
export class NewPostsComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private api: HeroService, private activeroute: ActivatedRoute) { }
 
ckeditorContent: any =''
safeContent:SafeHtml = '<h4>Content Unavailable</h4>'
holder:any;
localy:any
send:any = {
  content: '',
  category: '',
  headline: '',
  author:''
}

  ngOnInit(): void { 
    this.send.category = this.activeroute.snapshot.paramMap.get('category')
     this.send.author = JSON.parse(sessionStorage.getItem("user")as string)
    
  }

upload(){
  // console.log(this.ckeditorContent)
  this.send.content = this.sanitizer.bypassSecurityTrustHtml(this.ckeditorContent)
  this.api.upload(this.send).subscribe(res=>{
    this.holder = res
    console.log(this.holder.posts[this.holder.posts.length-1])
    alert("Post successfully Published")
  })
}

sanitize(){
   this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.ckeditorContent)
}
back(){
  history.back()
}

}
