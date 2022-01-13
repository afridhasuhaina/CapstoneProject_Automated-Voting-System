import { Component, OnInit } from '@angular/core';
import { ApprovedService } from 'src/app/service/approved.service';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-approve-candidate',
  templateUrl: './approve-candidate.component.html',
  styleUrls: ['./approve-candidate.component.css']
})
export class ApproveCandidateComponent implements OnInit {
  public candidateList:any=[];
  public approvedList:any;
  constructor(private candidate:CandidateService, private approved:ApprovedService) { }

  ngOnInit(): void {
    this.candidate.getcandidate()
    .subscribe(res=>{
      this.candidateList = res;
      console.log(this.candidateList);
    })

    this.getAllapproved();
  }

  approve(item:any){
    item.candidateid=this.candidateList.item.candidateid;
    this.approved.postapproved(item)
    .subscribe(res=>{
      console.log(res);
      alert("candidate approved")
      this.getAllapproved();
    });

  }

  getAllapproved(){
    this.approved.getapproved()
    .subscribe(res=>{
      this.approvedList=res;
      console.log(this.approvedList);
    });
  }
  
}
