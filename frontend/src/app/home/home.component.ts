import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: HeroService, private route: Router) { }
 store:any
  ngOnInit(): void {
    // this.allPosts()
    this.showcat()
  }

  allPosts(){
    this.api.allPosts().subscribe(res=>{
    })
  }

  getPosts(data:any){
    this.route.navigateByUrl(`//list/${data}`)
  }
  

  showcat(){
    // this.categories.length = 0
    this.api.getcategory().subscribe(res=>{
       this.store = res  
    }) 
  }

}
 