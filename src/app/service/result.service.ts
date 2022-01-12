import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }

  postResult(data:any){
    return this.http.post<any>("",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getResult(){
    return this.http.get<any>("")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateResult(data:any,id:number){
    return this.http.put<any>(""+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
