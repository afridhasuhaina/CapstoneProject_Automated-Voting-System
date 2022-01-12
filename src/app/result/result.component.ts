import { Component, OnInit } from '@angular/core';
import { ResultService } from '../service/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public resultList:any;

  constructor(private result:ResultService) { }

  ngOnInit(): void {
    this.result.getResult()
    .subscribe(res=>{
      this.resultList=res;
      console.log(this.resultList);
    });
    
  }

}
