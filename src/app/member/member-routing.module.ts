import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberJoinComponent } from './member-join/member-join.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { MemberProfileResolverService } from './services/member-profile-resolver.service';

const routes: Routes = [
  {path: 'member', component: MemberComponent, children:[
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: MemberLoginComponent},
    {path: 'join', component: MemberJoinComponent},
    {path: 'profile', component: MemberProfileComponent, canActivate: [AuthGuard],
      resolve: {member: MemberProfileResolverService}
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MemberProfileResolverService]
})
export class MemberRoutingModule { }