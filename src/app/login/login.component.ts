import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormDetailService} from "../detail-form/form-detail.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router : Router ,
              private userDetailService : FormDetailService) {
  }
  username = '';
  password = '';

  onSubmit() {

    if(this.username == '19it023.milan.solanki@vvpedulink.ac.in' && this.password == "1234"){
      this.userDetailService.UserEmail = this.username
      console.log("Success")
      this.router.navigate(['/detail-form'])
    }
  }
}
