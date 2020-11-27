import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  authenticate() {
    console.log(this.loginForm.value);
  }
}
