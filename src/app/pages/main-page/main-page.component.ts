import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from 'src/environments/environment';
import { HttpEventType } from '@angular/common/http';
import { HttpResponse } from 'aws-sdk/global';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  currentFile!: File;
  user: User=<User>{};
  //user: User | undefined;


  selectedFiles?: FileList;
  //currentFile?: File;
  message = '';
  errorMsg = '';
  uploadService: any;
  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
      this.apiServe.checkSession().subscribe(responseBody => {
        if(!responseBody.data){
          this.router.navigate(["/"]);
        } else {
          console.log(responseBody);
          this.user = responseBody.data;
          console.log("user"+JSON.stringify(this.user));
          console.log(this.user.userId);

        }
      })
    
  }

  
  
}


