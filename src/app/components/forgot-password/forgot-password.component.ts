import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = "";

  constructor(private apiServ: ApiService) { }

  ngOnInit(): void {
  }
  /*
  resetPassword() {
    this.apiServ.forgotPassword(this.email).subscribe(data => {
      console.log(data)
    })

  }
  */

}
