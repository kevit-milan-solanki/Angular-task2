import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FormDetailService} from "./detail-form/form-detail.service";

@Injectable({
  providedIn: "root"
})
export class DataService {

  constructor(private httpClint: HttpClient,
              private formServiceData: FormDetailService) {
  }


  fatchData() {
    this.httpClint.get("http://localhost:3000/posts").subscribe(res => {
      this.formServiceData.SetData(res)

    })
  }

}
