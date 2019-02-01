import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();
  @Output() registerControl = new EventEmitter();

  constructor(private auth: AuthService, private router: Router) { }

  register() {
    this.auth.register(this.user);
  }

  cancel() {
    this.registerControl.emit(false);
  }

}
