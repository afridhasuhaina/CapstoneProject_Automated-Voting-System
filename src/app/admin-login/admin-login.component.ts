import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http : HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:(['',Validators.required]),
      password:(['',Validators.required])
    })
  }

  login()
  {

    if (this.loginForm.value.email == ['admin@gmail.com'] && this.loginForm.value.password  == ['12345678']) {
    
      this.router.navigateByUrl('/dashboard');
    }
    else{
      this.http.get<any>("http://localhost:3000/adminList")
      .subscribe(res=>
        {
          const user = res.find((a:any)=>
          {
            return a.email === this.loginForm.value.email &&  a.password === this.loginForm.value.password })
            if(user){
              alert("Login Success");
              this.loginForm.reset();
              this.router.navigate(['/dashboard'])
            }
            else{
              alert("User Not Found");
            }
          })
        }
  }
    // this.api.getadmin()
  // login(){
  //   this.http.get<any>("http://localhost:3000/adminList")
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  //     });
  //     if(user){
  //       alert("Login Success");
  //       this.loginForm.reset();
  //       this.router.navigate(['dashboard']);
  //     }else{
  //       alert("User Not Found");
  //     }
  //   },err=>{
  //     alert("Something Went Wrong")
  //   })





}
