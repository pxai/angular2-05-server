import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {MyFormSimpleComponent} from './myformsimple.component';
import {SimpleValidationComponent} from './simplevalidation.component';
import {SpecificValidationComponent} from './specificvalidation.component';
import {NgFormValidationComponent} from './ngformvalidation.component';

/**
 * Form samples
 */
// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
    selector: 'server-app',
    directives: [ROUTER_DIRECTIVES],
    template: `<h1>{{title}}</h1>
                <nav> 
                <ul>
                    <li><a [routerLink]="['SimpleForm']">Simple form</a></li>
                </ul>
                </nav>
                <router-outlet></router-outlet>`
})
@RouteConfig([
  {path:'/simpleform', name: 'SimpleForm', component: MyFormSimpleComponent},
  ])
export class AppComponent {
    private title : string = 'Server samples';
}
