import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SetDateComponent } from '../set-date/set-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AnnounceResultComponent } from '../announce-result/announce-result.component';
import { ApproveCandidateComponent } from '../approve-candidate/approve-candidate.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    SetDateComponent,
    AdminDashboardComponent,
    AnnounceResultComponent,
    ApproveCandidateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[]
})
export class AdminModule { }
