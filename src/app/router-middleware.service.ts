import { Injectable } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationError,
  NavigationEnd
} from '@angular/router';
import { Store } from '@ngrx/store';

interface AppState {
  auth: object;
}

@Injectable({
  providedIn: 'root'
})
export class RouterMiddlewareService {
  unProtectedURLs: Array<String>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.unProtectedURLs = ['/login'];
  }

  navEvent = () => {
    //Router subscriber
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (this.unProtectedURLs.indexOf(event.url) === 0) {
          console.log('Navigating to Un-Protected URL');
          this.store.subscribe(data => {
            if (data.auth['isLoggedIn']) {
              this.router.navigate(['/products']);
            }
          });
        } else{
          
          this.store.subscribe(data => {
            if (!data.auth['isLoggedIn']) {
              this.router.navigate(['/login']);
            }
          });
        }
        //do something on start activity
        console.info('NavigationStart', event);
      }

      if (event instanceof NavigationError) {
        // Handle error
        console.error(event.error);
      }

      if (event instanceof NavigationEnd) {
        //do something on end activity
        console.info('NavigationEnd', event);
      }
    });
  };
}
