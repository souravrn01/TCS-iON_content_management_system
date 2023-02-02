import { NgModule } from '@angular/core';
import { RouterModule, Routes,ChildrenOutletContexts } from '@angular/router';
import { ListPostsComponent } from './authenticated-module/list-posts/list-posts.component';
import { UserHomeComponent } from './authenticated-module/user-home/user-home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthUserLoginComponent } from './components/auth-user-login/auth-user-login.component';
import { AuthUserSignupComponent } from './components/auth-user-signup/auth-user-signup.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';
import { NewPostsComponent } from './components/new-posts/new-posts.component';
import { RootLoginComponent } from './components/root-login/root-login.component';
import { ShowPostsComponent } from './components/show-posts/show-posts.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
import { HomeComponent } from './home/home.component';
import { ManagePageComponent } from './root-module/manage-page/manage-page.component';
import { RootHomeComponent } from './root-module/root-home/root-home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component:HomeComponent, children:[{path:'list/:category', component:ListPostsComponent}]},
  { path: 'authUser', component:AuthUserLoginComponent},
  { path: 'authUsersignup', component:AuthUserSignupComponent},
  {path: 'root', component:RootLoginComponent},
  {path: 'admin', component:AdminLoginComponent},
  {path: 'manage',canActivate:[AuthGuard], component: ManagePageComponent}, 
  {path: 'post/:category',canActivate:[AuthGuard], component:NewPostsComponent},
  {path: 'roothome',canActivate:[AuthGuard], component: RootHomeComponent},
  {path: 'edit/:id/:category',canActivate:[AuthGuard], component: EditComponentComponent},
  {path: 'userhome',canActivate:[AuthGuard], component: UserHomeComponent},
  {path: 'managePosts',canActivate:[AuthGuard], component:ManagePostsComponent, children:[{path: 'updatePosts/:category', component:UpdatePostsComponent}]},
  {path: 'show/:id/:category', component: ShowPostsComponent},
  {path: 'forbidden', component: ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 