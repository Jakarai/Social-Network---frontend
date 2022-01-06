import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: User | undefined;
  profile_picture: string = "../../../assets/img/default-profile-picture.png";
  username: Observable<string | null> | undefined;

  session: boolean = false;

  constructor(private apiServ: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiServ.checkSession().subscribe(responseBody => {
      if(!responseBody.data){
        this.router.navigate(["/"]);
      } else {
        console.log(responseBody);
        this.user = responseBody.data;
        this.session = true;

        console.log(this.user);
        this.username = this.route.paramMap.pipe(
          map((params: ParamMap) => params.get(`${this.user?.username}`))
        );
      }
    })
  }

  logout(){
    this.apiServ.logout().subscribe(responseBody => {
      this.router.navigate(["/"]);
    })
  }
}
