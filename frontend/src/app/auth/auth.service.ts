import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import * as fromProduct from '../store/product.reducer';
import * as productActions from '../store/product.action';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl = environment.baseApi + 'api/auth/';
  jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private store: Store<fromProduct.ProductState>,
    private router: Router
  ) { }

  decode() {
    const token = localStorage.getItem('token');
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
  }

  login(loginUser) {
    return this.http.post(this.baseUrl + 'login', loginUser).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          const decodedToken = this.jwtHelper.decodeToken(user.token);
          this.store.dispatch(new productActions.TokenState(decodedToken.nameid));
          this.store.dispatch(new productActions.GetIsOrder(decodedToken.nameid));
        }
      })
    );
  }

  register(loginUser) {
    return this.http.post(this.baseUrl + 'register', loginUser)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logOut() {
    localStorage.removeItem('token');
    this.store.dispatch(new productActions.TokenState(''));
    this.store.dispatch(new productActions.GetIsOrder(0));
    this.router.navigate(['/']);
  }

  getUserId() {
    const decodedToken = this.decode();
    if (decodedToken) {
      return decodedToken.nameid;
    }
  }

  isUserAdmin() {
    const decodedToken = this.decode();
    if (decodedToken) {
      return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/authorizationdecision'];
    }
  }
}
