import { Component, OnInit } from '@angular/core';
import { ApprovedService } from '../service/approved.service';
import { EventService } from '../service/event.service';
import { ResultService } from '../service/result.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  public approvedList : any ;
  public dateList!: Date;
  public voteday!: boolean;
  todaysdate=new Date();
  constructor(private approved:ApprovedService, private result:ResultService, private date:EventService) { }

  ngOnInit(): void {
    this.approved.getapproved()
    .subscribe(res=>{
      this.approvedList = res;
      console.log(this.approvedList);
    });
    this.date.getsettedDate()
    .subscribe(res=>{
      const votingday = res.find((a:any)=>{
        return a.voteSD <= this.todaysdate && a.voteED >= this.todaysdate
      })
      this.voteday=votingday;
      console.log(this.dateList);
    });
    
  }
  // votingday();
  // votingday(){
  //   if(dateList.voteSD===todaysdate){}
  // }

  vote(item:any){
    item.count+=1;
    this.result.postResult(item);
  }

}
