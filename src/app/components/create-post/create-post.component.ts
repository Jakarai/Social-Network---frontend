import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postInput: string="";
  user: User=<User>{};
  currentFile!: File;

  selectedFiles?: FileList;
  //currentFile?: File;
  message = '';
  errorMsg = '';
  uploadService: any;
  img = '';

  //userId:number=0;

  constructor(private apiServe: ApiService,router:Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.user = responseBody.data;
      console.log(this.user);
    })
  }

  selectedFile(event:any)
  {
    this.currentFile = event.target.files;
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log("selected files: "+this.selectedFiles);
  }
  /*
  upload(): void 
  {
    //this.upload();
    this.apiServe.createPost(this.postInput,this.user).subscribe(responseBody0=>
      {
      //  console.log(responseBody0)
        this.errorMsg = '';

    if (this.selectedFiles) 
    {
      console.log("file found");

      const file: File | null = this.selectedFiles.item(0);

      if (file) 
      {
        this.currentFile = file;
        console.log(this.currentFile);
        this.apiServe.upload(this.currentFile,this.user.userId).subscribe(responseBody=>
        {
          console.log(responseBody.data);
        });
      }

    }


      })

    

  }
  */

  uploadPost()
  {
    
      this.errorMsg = '';

      if (this.selectedFiles) 
      {
        console.log("file found");
  
        const file: File | null = this.selectedFiles.item(0);
  
        if (file) 
        {
          this.currentFile = file;
          console.log(this.currentFile);
          this.apiServe.upload(this.currentFile,this.user.userId).subscribe(responseBody=>
          {
            this.img = responseBody.data;
            console.log(responseBody.data);
            this.apiServe.createPost(this.postInput,this.user,this.img).subscribe(responseBody0=>
              {
                console.log(responseBody0)
              })
          });
        }
  
      }
      //if(this.selectedFile==null)
      else
      {console.log("no picture")
        this.apiServe.createPost(this.postInput,this.user,"").subscribe(responseBody0=>
          {
            console.log(responseBody0);
          })
      }
  
  

  }


}
