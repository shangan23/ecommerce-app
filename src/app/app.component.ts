import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationError,
  NavigationEnd
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce App';

  constructor(private router: Router) {
    //Router subscriber
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
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
  }
}
