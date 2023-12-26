import { Component, OnInit, inject } from '@angular/core';
import { Member } from '../interfaces/member.interface';
import { MemberService } from '../_services/member.service';
import { MemberCardComponent } from './components/member-card.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent implements OnInit {
  members: Member[] = [];
  memberService = inject(MemberService);
  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (data) => (this.members = data),
      error: (err) => console.log(err),
    });
  }
}
