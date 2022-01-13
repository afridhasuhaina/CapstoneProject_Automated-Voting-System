import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  getadmin(){
    return this.http.get<any>("http://localhost:3000/adminList")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
