import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfig } from '../../config';
import { catchError } from 'rxjs/operators';
import { ConfigService } from '../config.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthAction from 'src/store/actions/auth.action';

interface AppState {
  auth: object;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private errorService: ConfigService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  authenticate(userName, password): Observable<object> {
    console.log(userName, password);
    return this.http
      .post(`${appConfig.apiEndpoint}/authenticate`, {
        userName: userName,
        password: password
      })
      .pipe(catchError(this.errorService.handleError));
  }

  extractToken(jwtToken) {
    console.log('jwtToken', jwt_decode(jwtToken['jwt']));
    localStorage.setItem('username', jwt_decode(jwtToken['jwt'])['sub']);
    localStorage.setItem('token', jwtToken['jwt']);
    localStorage.setItem('expiersOn', jwt_decode(jwtToken['jwt'])['exp']);
  }

  isLoggedIn() {}

  logOut() {
    localStorage.clear();
    this.store.dispatch(new AuthAction.Logout());
    this.router.navigate(['/login']);
  }
}
