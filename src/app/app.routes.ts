import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './matches/matches.component';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { MembersDetailsComponent } from './members/details/members-details.component';
import { MemberEditComponent } from './members/edit/member-edit.component';
import { preventUnsavedChangesGuard } from './guards/prevent-unsaved-changes.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {
        path: 'matches',
        component: MatchesComponent,
      },

      { path: 'messages', component: MessagesComponent },
      {
        path: 'members',
        component: MembersComponent,
      },
      {
        path: 'members/edit',
        component: MemberEditComponent,
        canDeactivate: [preventUnsavedChangesGuard],
      },
      {
        path: 'members/:username',
        component: MembersDetailsComponent,
      },
    ],
  },

  { path: '**', component: HomeComponent },
];
