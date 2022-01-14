import { HttpResponseBase } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: any = 0;
  posts: Array<any> = [];
  pictures: Array<any> = [];

  constructor(private apiServ: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.userId = Number(this.router.url.slice(1,2));
    this.apiServ.getUsersPosts(this.userId).subscribe(responseBody => {
      this.posts = responseBody.data;
    })
    this.apiServ.getAllPicsByUserId(this.userId).subscribe(responseBody0 => {
      this.pictures = responseBody0.data;
    })
    
  }

}
