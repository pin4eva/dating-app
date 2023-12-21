import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginDTO, LoginResponse } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class NavComponent implements OnInit {
  currentUser$: Observable<LoginResponse | null> = of(null);
  model: LoginDTO = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.currentUser$ = this.authService.currentUser$;
  }

  login() {
    this.authService.login(this.model).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => console.error(error),
    });
  }

  logout() {
    this.authService.logout();
  }
}
