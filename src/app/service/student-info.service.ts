import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  constructor(private http : HttpClient) { }
  getStudentInfo(){
    return this.http.get<any>("http://localhost:3000/studentinfo")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
