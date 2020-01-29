import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  url = 'http://localhost:4000/business/';
  editor;
  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getBusiness() {
    return this.http.get(`${this.url}`);
  }

  editBusiness(_id: any) {
    return this
      .http
      .get(`${this.url}/edit/${_id}`);
  }

  updateBusiness(person_name, business_name, business_gst_number, _id) {

    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    this
      .http
      .post(`${this.url}/update/${_id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteBusiness(_id) {
    return this
      .http
      .get(`${this.url}/delete/${_id}`);
  }

}
