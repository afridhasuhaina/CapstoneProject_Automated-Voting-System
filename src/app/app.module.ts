import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoterRegisterComponent } from './voter-register/voter-register.component';
import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { VoteComponent } from './vote/vote.component';
import { SetDateComponent } from './admin/set-date/set-date.component';
import { ApproveCandidateComponent } from './admin/approve-candidate/approve-candidate.component';
import { AnnounceResultComponent } from './admin/announce-result/announce-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ResultComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    VoterRegisterComponent,
    CandidateRegisterComponent,
    VoteComponent,
    SetDateComponent,
    ApproveCandidateComponent,
    AnnounceResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
