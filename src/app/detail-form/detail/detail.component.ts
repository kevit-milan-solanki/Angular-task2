import {Component, OnInit} from '@angular/core';
import {FormDetailService} from "../form-detail.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  constructor(private readonly formDetailService: FormDetailService,
              private httpClint : HttpClient,
              private readonly router: Router,
              private dataService : DataService) {
  }

  ngOnInit() {
    this.dataService.fatchData()
    console.log(this.formDetailService.Detail)
  }


  logOut() {
    // this.formDetailService.Detail = ''
    // this.router.navigate(['login']);
  }


  detail: any = this.formDetailService.Detail;
  //name: string = this.detail.name;
  // DateOfBirth = this.detail.dateOfBirth;
  // email: string = this.formDetailService.UserEmail;
  // mobileNumber: string = this.detail.mobileNumber.internationalNumber;
  // instituteName: string = this.detail.instituteName;
  // education: string = this.detail.education;
  // Hobbies: string = this.formDetailService.hobby;
  // gender: string = this.detail.gender;
  // Address: string = this.detail.address;
}
