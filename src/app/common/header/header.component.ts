import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

interface AppState {
  auth: object;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  appTitle: string;
  authInfo: Observable<object>;
  isLoggedIn: Observable<boolean>;
  constructor(private store: Store<AppState>, private authService : AuthService) {}

  ngOnInit(): void {
    this.authInfo = this.store.select('auth');
    this.authInfo.subscribe(data => (this.isLoggedIn = data['isLoggedIn']));
  }

  logout():void{
    this.authService.logOut();
  }
}
