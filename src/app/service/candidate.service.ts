import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http : HttpClient) { }

  getcandidateInfo(){
    return this.http.get<any>("http://localhost:3000/candidateList")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postCandidate(data:any){
    return this.http.post<any>("http://localhost:3000/candidateList",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
