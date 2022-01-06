import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.apiServe.getAllPosts().subscribe(responseBody => {
      console.log(responseBody.data);
      this.posts = responseBody.data;
    })
  }
}
