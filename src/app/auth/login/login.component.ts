import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthAction from '../../../store/actions/auth.action';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface AppState {
  auth: object;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  auth: Observable<object>;
  constructor(
    private builder: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router
  ) {
    this.auth = this.store.select('auth');
  }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async authenticate() {
    this.store.dispatch(new AuthAction.LoginInit());
    const authenticateAction = await this.authService
      .authenticate(
        this.loginForm.value.userName,
        this.loginForm.value.password
      )
      .subscribe(
        data => {
          this.authService.extractToken(data);
          this.store.dispatch(
            new AuthAction.LoginSuccess({ payload: data }, true)
          );
        },
        error => {
          this.store.dispatch(
            new AuthAction.LoginFailure({ payload: error }, false)
          );
        }
      );
    if (authenticateAction) this.router.navigate(['/products']);
  }
}
