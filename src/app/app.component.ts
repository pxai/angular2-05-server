import { Component } from '@angular/core';


// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
                <h2 [textContent]='subtitle'></h2>
                <img bind-src="logo">
                <a bind-href="angularSite">Angular site</a>
            `
})
export class AppComponent {
  private title : string = 'Angular2 00 Hello App';
  private subtitle : string = 'Angular2 is... so different';
  private logo : string = 'https://avatars0.githubusercontent.com/u/139426?v=3&s=400';
  private angularSite : string = 'https://angularjs.org/';

}
