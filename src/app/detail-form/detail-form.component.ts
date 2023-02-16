import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormDetailService} from "./form-detail.service";
import {
  CountryISO,
  SearchCountryField,
} from "ngx-intl-tel-input";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  constructor(private readonly router: Router,
              private httpClient: HttpClient,
              private readonly detailServer: FormDetailService) {
  }

  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  detailForms: FormGroup;
  name: string;
  age: number;
  date: any;
  selectedHobby: Array<any> = [];
  genders = ['male', 'female', "others"];

  emailID: string = this.detailServer.UserEmail;
  educationOptions: Array<String> = [
    'High School',
    'College',
    'Graduate School',
    'Other'
  ];


  loadForm(): void {
    this.detailForms = new FormGroup<any>({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl({value: this.emailID, disabled: true}),
      dateOfBirth: new FormControl(null, [Validators.required, this.validAge.bind(this)]),
      mobileNumber: new FormControl(null, [Validators.required]),
      instituteName: new FormControl(null, [Validators.required]),
      education: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      address: new FormControl(null),
      selectedHobby: new FormControl(null),
    })
  }


  validForm = false;

  ngOnInit(): void {
    this.loadForm()
  }

  hobbies = [
    {id: 1, hobbyName: "Reading", isSelected: false},
    {id: 2, hobbyName: "Writing", isSelected: false},
    {id: 3, hobbyName: "Traveling", isSelected: false},
    {id: 4, hobbyName: "Cooking", isSelected: false},
    {id: 5, hobbyName: "Other", isSelected: false},
  ]

  validAge(date: FormControl) {
    this.date = new Date(date.value)
    let age = Math.abs(Date.now() - this.date);
    this.age = Math.floor((age / (1000 * 3600 * 24)) / 365);
    if (this.age < 20) {
      return {age: true}
    }
    return null;
  }

  clearForm(){
    this.loadForm();

    console.log("hello")
  }

  onChange(): void {
    this.selectedHobby = this.hobbies.filter(hobby => hobby.isSelected == true).map(hobby => hobby.hobbyName);
  }

  addData(): void {
    const detail = this.detailForms.value;
    this.httpClient.get("http://localhost:3000/posts").subscribe(res =>{
      this.detailServer.Detail = res;
    })
    if (this.detailForms.valid && this.age >= 20) {
      this.detailServer.Detail = detail;
      this.detailServer.hobby = this.selectedHobby
      this.router.navigate(['detail']);
    } else {
      this.validForm = true;
    }
  }
}
