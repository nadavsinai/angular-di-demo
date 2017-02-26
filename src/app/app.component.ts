import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <nav>
  <ul>
  <li><a routerLink="/cars">Cars</a></li>
  <li><a routerLink="/bikes">Bikes</a></li>
</ul>
</nav>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Vehicles Demos';
}
