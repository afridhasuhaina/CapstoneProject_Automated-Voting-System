import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-announce-result',
  templateUrl: './announce-result.component.html',
  styleUrls: ['./announce-result.component.css']
})
export class AnnounceResultComponent implements OnInit {

  public resultList:any;

  constructor(private result:ResultService) { }

  ngOnInit(): void {
    this.result.getResult()
    .subscribe(res=>{
      this.resultList=res;
      console.log(this.resultList);
    });
  }
  
  announce(){
    this.resultList.display=true;
    this.result.updateResult(this.resultList.display,this.resultList)
    .subscribe(res=>{
      alert("Result announced Successfully");
    })
    
  }

}
