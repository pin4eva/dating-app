import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoginDTO,
  LoginResponse,
  RegisterDTO,
} from '../interfaces/auth.interface';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<LoginResponse | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) {}

  login(model: LoginDTO) {
    return this.http
      .post<LoginResponse>(this.baseUrl + '/auth/login', model)
      .pipe(
        map((response) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  register(input: RegisterDTO) {
    return this.http.post<User>(this.baseUrl + '/auth/register', input);
  }

  setCurrentUser(user: LoginResponse) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
