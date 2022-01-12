import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/service/event.service';
import { setdateModel } from './setdate.model';

@Component({
  selector: 'app-set-date',
  templateUrl: './set-date.component.html',
  styleUrls: ['./set-date.component.css']
})
export class SetDateComponent implements OnInit {

  public formvalue!: FormGroup;
  setdateobj!: setdateModel;
  
  constructor(private formbuilder:FormBuilder, private event:EventService ) { }
  
  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      candRegSD:(['',Validators.required]),
      candRegED:(['',Validators.required]),
      voteSD:(['',Validators.required]),
      voteED:(['',Validators.required])
    })
  }

  setDate(){
    this.setdateobj.candRegSD=this.formvalue.value.candRegSD;
    this.setdateobj.candRegED=this.formvalue.value.candRegED;
    this.setdateobj.voteSD=this.formvalue.value.voteSD;
    this.setdateobj.voteED=this.formvalue.value.voteED;

    this.event.postDate(this.setdateobj)
    .subscribe(res=>{
      console.log(res);
      alert("Date set Successfully") ;
    })
    this.formvalue.reset();
  }

}
