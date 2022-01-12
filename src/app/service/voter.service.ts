import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http:HttpClient) { }

  getVoter(){
    return this.http.get<any>("")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  post(data:any){
    return this.http.post<any>("",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}

