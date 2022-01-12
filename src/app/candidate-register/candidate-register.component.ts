import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../service/candidate.service';
import { StudentInfoService } from '../service/student-info.service';
import { candidatedetailsModel } from './candidatedetails.model';

@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css']
})
export class CandidateRegisterComponent implements OnInit {
  public candidateReg!:FormGroup;
  candidateModelObj!:candidatedetailsModel;
  constructor(private formbuilder:FormBuilder, private router:Router, private studentinfo:StudentInfoService, private candidate:CandidateService) { }

  ngOnInit(): void {
    this.candidateReg=this.formbuilder.group({
      collegeid:(['',Validators.required]),
      firstname:(['',Validators.required]),
      lastname:(['',Validators.required]),
      email:(['',Validators.required]),
      password:(['',Validators.required]),
      manifesto:(['',Validators.required])
    })
  }

  register()
  {
    this.studentinfo.getStudentInfo()
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.collegeId === this.candidateReg.value.collegeid && a.firstname === this.candidateReg.value.firstname && a.lastname === this.candidateReg.value.lastname && a.email === this.candidateReg.value.email && a.password === this.candidateReg.value.password 
      })
      if(user){
        this.candidateModelObj.collegeid=this.candidateReg.value.collegeid;
        this.candidateModelObj.firstname=this.candidateReg.value.firstname;
        this.candidateModelObj.lastname=this.candidateReg.value.lastname;
        this.candidateModelObj.email=this.candidateReg.value.email;
        this.candidateModelObj.manifesto=this.candidateReg.value.manifesto;

        this.candidate.postCandidate(this.candidateModelObj)
        .subscribe(res=>{
          console.log(res);
          alert("registration Successfull") ;
        })
        
        this.candidateReg.reset();
        this.router.navigate(['/vote'])
      }else{
        alert("User Not Found");
      }
    })
  }
}

