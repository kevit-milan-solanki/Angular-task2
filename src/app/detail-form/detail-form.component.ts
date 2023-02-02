import {Component, Input, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {FormDetailService} from "./form-detail.service";

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent {

  @ViewChild('detail') detailForm: NgForm;


  constructor(private router: Router,
              private route : ActivatedRoute,
              private details: FormDetailService) {
  }



  clearForm() {
    this.detailForm.reset();
  }


  name = 'Milan';
  dob = '12/12/2002';
  email = this.details.UserEmail;
  mobileNum = '9925588260';
  instituteName = 'vvp';
  Address = 'Rajkot';
  gender = 'Male';

  educationOptions = [
    'High School',
    'College',
    'Graduate School',
    'Other'
  ];
  selectedEducation = 'Collage';


  hobbyOptions: Array<any> = [
    'Reading',
    'Writing',
    'Traveling',
    'Cooking',
    'Other'
  ];
  selectedHobbies: Array<string> = [];

  hobbies = this.selectedHobbies


  log(){
    console.log(this.hobbies);

  }


  addData(details: NgForm) {
    const detail = details.value
    this.details.Detail = detail;
    this.details.log()
    this.clearForm();
    this.router.navigate(['detail'])
  }

}
