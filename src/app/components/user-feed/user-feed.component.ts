import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  user: User=<User>{};
  posts: Post[] = [];

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.user = responseBody.data;
      console.log(this.user);
    this.apiServe.getUsersPosts(this.user.userId).subscribe(responseBody0=>{
      this.posts = responseBody0.data;
      console.log(responseBody0);
    })
  })

}
}
