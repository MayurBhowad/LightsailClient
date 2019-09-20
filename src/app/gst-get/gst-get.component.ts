import { BusinessService } from './../business.service';
import { Component, OnInit } from '@angular/core';
import Business from '../Business';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BusinessService) { }

  ngOnInit() {
    this.bs.getBusiness().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

  deleteBusiness(_id) {
    this.bs.deleteBusiness(_id).subscribe(res => { console.log('Delete') });
    this.bs.getBusiness().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }
}
