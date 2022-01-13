import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from 'src/app/models/picture';
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
  post: Post=<Post>{};
  profilePic:String = "";
  picture0:Picture=<Picture>{};
  pictureList0: Array<any>=[];

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    
}
}
