import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MemberService } from '../../_services/member.service';
import { Member } from '../../interfaces/member.interface';
import { LoginResponse } from '../../interfaces/auth.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';
import { AlertModule } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [FormsModule, TabsModule, AlertModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.scss',
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  @HostListener('window:beforeunload', ['$event']) unloadNotification(
    $event: Event
  ) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }
  memberService = inject(MemberService);
  toaster = inject(ToastrService);
  member: Member | undefined | null;

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const response: LoginResponse = JSON.parse(userString);
    this.memberService.getMember(response?.username).subscribe({
      next: (member) => {
        this.member = member;
      },
      error: (e) => console.log(e),
    });
  }

  updateMember() {
    console.log('update member', this.editForm?.value);
    this.toaster.success('Profile updated');
    this.editForm?.reset(this.member);
  }
}
