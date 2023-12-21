import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './services/auth.service';
import { LoginResponse } from './interfaces/auth.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    FormsModule,

    // components
    NavComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  users: User[] = [];
  constructor(
    private readonly http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers() {
    this.http.get<User[]>('http://localhost:5223/api/users').subscribe({
      next: (data) => (this.users = data),
      error: (e) => console.log(e),
    });
  }

  setCurrentUser() {
    let user: LoginResponse | null;

    const userString = localStorage.getItem('user');
    if (userString) {
      user = JSON.parse(userString);
      if (user) {
        this.authService.setCurrentUser(user);
      }
    }
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}