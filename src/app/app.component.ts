import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { LoginResponse } from './interfaces/auth.interface';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment.development';
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
    HomeComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private readonly http: HttpClient,
    private authService: AuthService
  ) {
    console.log(environment.apiUrl);
  }

  ngOnInit(): void {
    this.setCurrentUser();
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
