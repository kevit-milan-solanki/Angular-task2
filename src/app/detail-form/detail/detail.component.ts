import {Component, OnInit} from '@angular/core';
import {FormDetailService} from "../form-detail.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{




  constructor(private formDetailService: FormDetailService,
              private router : Router) {
  }

  ngOnInit() {
    console.log(this.Hobies)
  }


  logOut(){
    this.formDetailService.Detail = ''
    this.router.navigate(['login'])

  }
  detail = this.formDetailService.Detail;
  name = this.detail.name;
  DateOfBirth = this.detail.dob;
  email = this.detail.email;
  mobilenum = this.detail.mobileNumber;
  institute = this.detail.instituteName;
  educaton = this.detail.education;
  Hobies = this.formDetailService.hobby;
  gender = this.detail.gender;
  Address = this.detail.address;

}
