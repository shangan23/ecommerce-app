import { Component } from '@angular/core';
import { RouterMiddlewareService } from './router-middleware.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce Backoffice';

  constructor(private routerMiddleware: RouterMiddlewareService) {
    this.routerMiddleware.navEvent();
  }
}
