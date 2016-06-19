"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var about_component_1 = require('./about/about.component');
var team_component_1 = require('./team/team.component');
var emphases_component_1 = require('./emphases/emphases.component');
var fotos_component_1 = require('./fotos/fotos.component');
var open_component_1 = require('./open/open.component');
var way_component_1 = require('./way/way.component');
var contact_component_1 = require('./contact/contact.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n    <a [routerLink]=\"['ABOUT']\">\u00DCber uns</a>\n    <a [routerLink]=\"['TEAM']\">Team</a>\n    <a [routerLink]=\"['EMPHASES']\">Schwerpunkte</a>\n    <a [routerLink]=\"['FOTOS']\">Fotos</a>\n    <a [routerLink]=\"['OPEN']\">\u00D6ffnungszeiten</a>\n    <a [routerLink]=\"['WAY']\">Weg zu uns</a>\n    <a [routerLink]=\"['CONTACT']\">Kontakt</a>\n  </nav>\n  <router-outlet></router-outlet>",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/about',
                name: 'ABOUT',
                component: about_component_1.AboutComponent
            },
            {
                path: '/team',
                name: 'TEAM',
                component: team_component_1.TeamComponent
            },
            {
                path: '/emphases',
                name: 'EMPHASES',
                component: emphases_component_1.EmphasesComponent
            },
            {
                path: '/fotos',
                name: 'FOTOS',
                component: fotos_component_1.FotosComponent
            },
            {
                path: '/open',
                name: 'OPEN',
                component: open_component_1.OpenComponent
            },
            {
                path: '/way',
                name: 'WAY',
                component: way_component_1.WayComponent
            },
            {
                path: '/contact',
                name: 'CONTACT',
                component: contact_component_1.ContactComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map