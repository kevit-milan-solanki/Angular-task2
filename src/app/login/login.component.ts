import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormDetailService} from "../detail-form/form-detail.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private readonly router: Router,
              private readonly userDetailService: FormDetailService,
              private readonly toastr: ToastrService) {
  }

  loginForm: FormGroup;
  userEmail: string;
  password: string;

  ngOnInit() {
    this.loginForm = new FormGroup<any>({
      userEmail: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onSubmit(): void {
    const loginDetail = this.loginForm.value;
    if (loginDetail.userEmail == '19it023.milan.solanki@vvpedulink.ac.in' && loginDetail.password == "1234") {
      this.userDetailService.UserEmail = loginDetail.userEmail;
      this.toastr.success('LogIn Successful', 'Success');
      this.router.navigate(['/detail-form']);
    }
  }
}
