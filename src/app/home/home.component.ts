import { Component, OnInit } from '@angular/core';
import { ApprovedService } from '../service/approved.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public approvedList:any;
  constructor(private approved:ApprovedService) { }

  ngOnInit(): void {
    this.approved.getapproved()
    .subscribe(res=>{
      this.approvedList = res;
      console.log(this.approvedList);
    });
    
  }

}
