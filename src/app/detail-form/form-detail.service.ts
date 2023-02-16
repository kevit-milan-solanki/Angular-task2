import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class FormDetailService {
  public UserEmail: string;
  public Detail: any;
  public hobby: any;

  SetData(data){
    this.Detail =data
    console.log(this.Detail)
  }

}
