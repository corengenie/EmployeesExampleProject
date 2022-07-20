import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
              <app-navbar></app-navbar>
              <router-outlet></router-outlet>
            </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employeesexampleproject';
}
