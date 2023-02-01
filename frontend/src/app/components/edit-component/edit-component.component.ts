import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
}) 
export class EditComponentComponent implements OnInit {

  constructor(private api: HeroService, private activated: ActivatedRoute,private sanitizer: DomSanitizer) { }
heading:String = ''
  home: boolean = false
  editContent:SafeHtml = ''
  store:any 
  update:any = {
    ckeditorContent: ''
  }
 
  ngOnInit(): void {
    this.Onload()
    this.getContent()
    this.check()
    
  }

  check(){
    let admin = JSON.parse(sessionStorage.getItem("admin")as string)
    let user = JSON.parse(sessionStorage.getItem("user")as string)
    if(user === 'Root User' || admin === 'true'){
      this.home = true
    }else{
      this.home = false
    }
  }

Onload(){
 this.activated.paramMap.subscribe(params=>{
  this.update.id = params.get('id')
  this.update.category = params.get('category')
 })
}

getContent(){
  this.api.getContent(this.update).subscribe(res=>{
    this.store = res
    this.update.ckeditorContent = this.store.content
    this.heading = this.store.headline
  })
}

sanitize(){
  this.editContent = this.sanitizer.bypassSecurityTrustHtml(this.update.ckeditorContent)
}

newContent(){
  this.api.newContent(this.update).subscribe(res=>{
    window.alert('content updated')
  })
}
updateHeading(){
this.update.heading = this.heading
this.api.newHeadline(this.update).subscribe(res=>{
  window.alert('Heading updated')
  this.ngOnInit()
})
}

function(){
  history.back()
}
}
