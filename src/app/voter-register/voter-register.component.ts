import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentInfoService } from '../service/student-info.service';
@Component({
  selector: 'app-voter-register',
  templateUrl: './voter-register.component.html',
  styleUrls: ['./voter-register.component.css']
})
export class VoterRegisterComponent implements OnInit {
  public voterReg!:FormGroup;
  constructor(private formbuilder: FormBuilder, private router:Router, private studentinfo:StudentInfoService) { }

  ngOnInit(): void {
    this.voterReg=this.formbuilder.group({
      college_id:(['',Validators.required]),
      firstname:(['',Validators.required]),
      lastname:(['',Validators.required]),
      email:(['',Validators.required]),
      password:(['',Validators.required])
    })
  }

  voterregister()
  {
    this.studentinfo.getStudentInfo()
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.college_id === this.voterReg.value.college_id && a.firstname === this.voterReg.value.firstname && a.lastname === this.voterReg.value.lastname && a.email === this.voterReg.value.email && a.password === this.voterReg.value.password 
      })
      if(user){
        alert("registration Successfull");
        this.voterReg.reset();
        this.router.navigate(['/vote'])
      }else{
        alert("User Not Found");
      }
    })
  }

}
