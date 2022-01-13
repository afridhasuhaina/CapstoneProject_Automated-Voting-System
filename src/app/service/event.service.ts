import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient) { }

  getsettedDate(){
    return this.http.get<any>("http://localhost:3000/event")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postDate(data:any){
    return this.http.post<any>("http://localhost:3000/event",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
