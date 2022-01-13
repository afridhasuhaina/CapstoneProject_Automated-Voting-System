import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AnnounceResultComponent } from './admin/announce-result/announce-result.component';
import { ApproveCandidateComponent } from './admin/approve-candidate/approve-candidate.component';
import { SetDateComponent } from './admin/set-date/set-date.component';
import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { VoteComponent } from './vote/vote.component';
import { VoterRegisterComponent } from './voter-register/voter-register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'result',component:ResultComponent},
  {path:'voterregister',component:VoterRegisterComponent},
  {path:'candregister',component:CandidateRegisterComponent},
  {path:'vote',component:VoteComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'dashboard',component:AdminDashboardComponent,
  children: [
    {path:'',redirectTo:'approve',pathMatch:'full'},
    {path:'announce',component:AnnounceResultComponent},
    {path:'approve',component:ApproveCandidateComponent},
    {path:'setdate',component:SetDateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
