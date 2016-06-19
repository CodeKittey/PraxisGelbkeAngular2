import { Component } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { EmphasesComponent } from './emphases/emphases.component';
import { FotosComponent } from './fotos/fotos.component';
import { OpenComponent } from './open/open.component';
import { WayComponent } from './way/way.component';
import { ContactComponent } from './contact/contact.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['ABOUT']">Über uns</a>
    <a [routerLink]="['TEAM']">Team</a>
    <a [routerLink]="['EMPHASES']">Schwerpunkte</a>
    <a [routerLink]="['FOTOS']">Fotos</a>
    <a [routerLink]="['OPEN']">Öffnungszeiten</a>
    <a [routerLink]="['WAY']">Weg zu uns</a>
    <a [routerLink]="['CONTACT']">Kontakt</a>
  </nav>
  <router-outlet></router-outlet>`
  ,
  directives: [ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/about',
    name: 'ABOUT',
    component: AboutComponent
  },
    {
    path: '/team',
    name: 'TEAM',
    component: TeamComponent
  },
    {
    path: '/emphases',
    name: 'EMPHASES',
    component: EmphasesComponent
  },
    {
    path: '/fotos',
    name: 'FOTOS',
    component: FotosComponent
  },
    {
    path: '/open',
    name: 'OPEN',
    component: OpenComponent
  },
    {
    path: '/way',
    name: 'WAY',
    component: WayComponent
  },
    {
    path: '/contact',
    name: 'CONTACT',
    component: ContactComponent
  }
])
export class AppComponent { }
