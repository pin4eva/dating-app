import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Member } from '../interfaces/member.interface';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);
  constructor() {}

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + '/users/members');
  }

  getMember(username: string) {
    return this.http.get<Member>(
      this.baseUrl + `/users/members/username/${username}`
    );
  }
}
