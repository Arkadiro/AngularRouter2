import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id:0,
    title:'',
    body:''
  }
  isEdit:boolean =false;

  constructor( private postServise : PostService) { }

  ngOnInit() {
    this.postServise.getPosts()
      .subscribe(
        (posts: Post[])=>{
          this.posts = posts;
          console.log(this.posts)
        }
      )
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
  }

  editPost(post: Post){
    this.currentPost = post;
    this.isEdit = true
  }

  onUpdatedPost(post: Post){
    this.posts.forEach((current, index)=>{
      if(post.id === current.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post)
        this.isEdit = false;
        this.currentPost = {
          id:0,
          title:'',
          body:''
        }
      }
    });
  }
  removePost(post: Post){
    if (confirm('Are you Sure?')){
      this.postServise.removePost(post.id)
        .subscribe(
          ()=>{
            this.posts.forEach((current, index)=>{
              if(post.id === current.id) {
                this.posts.splice(index, 1);
              }
            });
          
          }
        )
    }
  }

}
