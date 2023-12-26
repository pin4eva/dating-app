import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RegisterComponent } from '../components/register/register.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  private readonly http: HttpClient = inject(HttpClient);
  constructor() {}
  ngOnInit(): void {}
  registerMode = false;

  registerToggle(event?: boolean) {
    this.registerMode = event || !this.registerMode;
  }
}
