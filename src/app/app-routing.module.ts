import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'post/:id', component: PostComponent},
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' }

]

@NgModule({
  exports: [RouterModule],
  imports: [
    //CommonModule
    RouterModule.forRoot(router)
  ]
})
export class AppRoutingModule { }
