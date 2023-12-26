import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() cancelRegister = new EventEmitter();
  model = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  register() {
    this.authService.register(this.model).subscribe({
      next: (data) => console.log(data),
      error: (e) => console.log(e),
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
