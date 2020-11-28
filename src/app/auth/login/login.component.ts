import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthAction from '../../../store/actions/auth.action';

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
  constructor(private builder: FormBuilder, private store: Store<AppState>) {
    this.auth = this.store.select('auth');
  }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  authenticate() {
    this.store.dispatch(new AuthAction.LoginFetch());
    console.log(this.loginForm.value);
    this.store.dispatch(
      new AuthAction.LoginSuccess({ payload: { success: true } })
    );
  }
}
