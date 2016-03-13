import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {InsightComponent} from './insight.component';

@Component({
    selector: 'app-insight',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})
@RouteConfig([
    {
        path: '/',
        name: 'Insight',
        component: InsightComponent,
        useAsDefault: true
    }
])
export class AppComponent { }