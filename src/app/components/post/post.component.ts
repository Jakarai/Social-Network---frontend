import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Picture } from 'src/app/models/picture';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  picture: Picture=<Picture>{};
  user0: User=<User>{};
  post: Post=<Post>{}
  postList: Array<any>=[];

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.apiServe.getAllPosts().subscribe(responseBody => {
      //console.log("response: "+responseBody.data);
      this.postList = responseBody.data;

      //console.log(this.postList[0])
      for(let i=0;i<this.postList.length;i++)
      {
        this.post=this.postList[i];
        this.posts[i] = this.post;
        console.log(this.post);
        console.log(this.post.user.username);

      }
      //this.post = this.posts
      //this.user.username=this.posts.
    })
  }
}
