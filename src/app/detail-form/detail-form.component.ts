import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {FormDetailService} from "./form-detail.service";

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  @ViewChild('detail') detailForm: NgForm;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private details: FormDetailService) {
  }


  clearForm() {
    this.detailForm.reset();
  }

  emailID = this.details.UserEmail;
  educationOptions = [
    'High School',
    'College',
    'Graduate School',
    'Other'
  ];
  hobbby = [];

  ngOnInit() {
    this.getHobby();
  }

  getHobby() {
    this.hobbby = [
      {id: 1, hName: "Reading", isSelected: false},
      {id: 2, hName: "Writing", isSelected: false},
      {id: 3, hName: "Traveling", isSelected: false},
      {id: 4, hName: "Cooking", isSelected: false},
      {id: 5, hName: "Other", isSelected: false},
    ]
  }

  selectedHoby = [];

  onChange() {
    this.selectedHoby = this.hobbby.filter(h => h.isSelected == true).map(h => h.hName)
  }

  dob: Date;
  currantDate = new Date()
  validForm = true;
  age: number;
  date;
  doberror = false;

  addData(details: NgForm) {
    const detail = details.value;

    this.date = new Date(detail.dob)
    var timeDiff = Math.abs(Date.now() - this.date);
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

    if (details.valid && this.age > 18) {
      this.details.Detail = detail;
      this.details.hobby = this.selectedHoby;
      this.clearForm();
      this.router.navigate(['detail']);
      this.validForm = true;
      this.doberror = false;
    } else {
      if (this.age < 20) {
        this.doberror = true;
      }
      else {
        this.doberror = false;

      }
      this.validForm = false

    }
  }

}
