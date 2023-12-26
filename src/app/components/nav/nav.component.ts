import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginDTO, LoginResponse } from '../../interfaces/auth.interface';
import { AuthService } from '../../_services/auth.service';
import { CommonModule } from '@angular/common';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Observable, of } from 'rxjs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
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
  navlist = navList;
  model: LoginDTO = {
    username: '',
    password: '',
  };

  constructor(
    public authService: AuthService,
    private readonly router: Router,
    private readonly toaster: ToastrService
  ) {}
  ngOnInit(): void {}

  login() {
    this.authService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members');
      },
      error: (error: HttpErrorResponse) => this.toaster.error(error.error),
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}

const navList = [
  {
    name: 'Matches',
    link: '/matches',
  },
  {
    name: 'List',
    link: '/members',
  },
  {
    name: 'Messages',
    link: '/messages',
  },
];
