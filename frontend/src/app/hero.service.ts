import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
}) 
export class HeroService {

  store:any
  
  setData(value: any) {
    this.store = value;
  }

  getData() {
    return this.store;
  }

  constructor(private http: HttpClient) { }

register(data:any){                                               // To register Authenticated User
  return this.http.post('http://localhost:4500/api/authUser/signup', data)
}

login(data:any){                                                   // To login Authenticated User
  return this.http.post('http://localhost:4500/api/authUser/login', data)
  
}

rootlogin(data:any){                                               // To login root user
  return this.http.post('http://localhost:4500/api/rootUser/login', data)
}

AdminLogin(data:any){                                               // To login Admin
  return this.http.post('http://localhost:4500/api/admin/login', data)
}

collectUsers(){
  return this.http.get('http://localhost:4500/api/rootUser/collect') // to get all Authenticated users data
}

toggle(id:any){                                                         // to manage admin
  return this.http.get(`http://localhost:4500/api/rootuser/toggleAdmin/${id}`)
}

upload(data:any){                                                      // publishing

 return this.http.put ('http://localhost:4500/api/rootUser/publish', data)
}

postcategory(data:any){                                                    // creating category
  return this.http.post ('http://localhost:4500/api/rootUser/createCategory', {data})
 }

getcategory(){                                                        // to get a category
  return this.http.get("http://localhost:4500/api/rootUser/getCategory")
}

getPostsUndercategory(body:any){
  return this.http.post("http://localhost:4500/api/rootUser/getCatPosts", body)
}

deletePost(data:any){
  return this.http.post(`http://localhost:4500/api/rootUser/deletePost`, data)
}



getContent(data:any){ 
  return this.http.post('http://localhost:4500/api/rootUser/getContent', data)
}

newContent(data:any){
  return this.http.put('http://localhost:4500/api/rootUser/newContent', data)
}

newHeadline(data:any){
  return this.http.put('http://localhost:4500/api/rootUser/newHeadline', data)
}

editCat(data:any){ 
  return this.http.put('http://localhost:4500/api/rootUser/editCat', data)
}

delCat(id:any){
  return this.http.delete(`http://localhost:4500/api/rootUser/delCat/${id}`)
}

getUserPosts(name:any){
  return this.http.get(`http://localhost:4500/api/rootUser/userPosts/${name}`)
}

allPosts(){
  return this.http.get('http://localhost:4500/api/rootUser/allPosts')
}

loggedIn(){
  return !!localStorage.getItem('token');
 }

 getToken(){
  return localStorage.getItem('token')
 }
}


 