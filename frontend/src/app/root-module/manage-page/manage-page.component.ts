import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.css']
})
export class ManagePageComponent implements OnInit {

  constructor(private api: HeroService) { }

AuthUserDatas: any


  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.api.collectUsers().subscribe(res=>{
      this.AuthUserDatas = res
    })
  }

  changeAdmin(id:any){
    this.api.toggle(id).subscribe(res=>{
      this.getAllUsers()
    })
  }


}
 