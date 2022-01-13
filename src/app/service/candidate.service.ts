import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  public candList : any =[]
  public selectedcandList = new BehaviorSubject<any>([]);
  constructor() { }

  getcandidate(){
    return this.selectedcandList.asObservable();
  }

  setcandidate(data : any){
    this.candList.push(...data);
    this.selectedcandList.next(data);
  }

  postcandidate(data : any){
    this.candList.push(data);
    this.selectedcandList.next(this.candList);
    console.log(this.candList)
  }

}
// import { HttpClient } from '@angular/common/http';
// import {map} from 'rxjs/operators';
// private http : HttpClient
  // getcandidateInfo(){
  //   return this.http.get<any>("http://localhost:3000/candidateList")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // postCandidate(data:any){
  //   return this.http.post<any>("http://localhost:3000/candidateList",data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }