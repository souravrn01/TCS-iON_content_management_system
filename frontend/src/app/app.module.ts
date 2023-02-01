import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RootLoginComponent } from './components/root-login/root-login.component';
import { AuthUserLoginComponent } from './components/auth-user-login/auth-user-login.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AuthUserSignupComponent } from './components/auth-user-signup/auth-user-signup.component'
import { HeroService } from './hero.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManagePageComponent } from './root-module/manage-page/manage-page.component';
import { NewPostsComponent } from './components/new-posts/new-posts.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { RootHomeComponent } from './root-module/root-home/root-home.component';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserHomeComponent } from './authenticated-module/user-home/user-home.component';
import { ListPostsComponent } from './authenticated-module/list-posts/list-posts.component';
import { ShowPostsComponent } from './components/show-posts/show-posts.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    RootLoginComponent,
    AuthUserLoginComponent,
    AuthUserSignupComponent,
    ManagePageComponent,
    NewPostsComponent,
    RootHomeComponent,
    ManagePostsComponent,
    UpdatePostsComponent,
    EditComponentComponent,
    UserHomeComponent,
    ListPostsComponent,
    ShowPostsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
