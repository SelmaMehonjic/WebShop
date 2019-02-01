import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = new User();
  tokenId: number;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.auth.login(this.user).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    );
  }
}
