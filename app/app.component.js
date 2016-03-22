System.register(['angular2/core', 'angular2/router', './myformsimple.component', './simplevalidation.component', './specificvalidation.component', './ngformvalidation.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, myformsimple_component_1, simplevalidation_component_1, specificvalidation_component_1, ngformvalidation_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (myformsimple_component_1_1) {
                myformsimple_component_1 = myformsimple_component_1_1;
            },
            function (simplevalidation_component_1_1) {
                simplevalidation_component_1 = simplevalidation_component_1_1;
            },
            function (specificvalidation_component_1_1) {
                specificvalidation_component_1 = specificvalidation_component_1_1;
            },
            function (ngformvalidation_component_1_1) {
                ngformvalidation_component_1 = ngformvalidation_component_1_1;
            }],
        execute: function() {
            /**
             * Form samples
             */
            // Different kinds of interpolation
            // Notice textContent is a dom element
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Form samples';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'forms-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "<h1>{{title}}</h1>\n                <nav> \n                <ul>\n                    <li><a [routerLink]=\"['SimpleForm']\">Simple form</a></li>\n                    <li><a [routerLink]=\"['SimpleValidation']\">Simple form with validation</a></li>\n                    <li><a [routerLink]=\"['SpecificValidation']\">Form with Specific validation</a></li>\n                    <li><a [routerLink]=\"['NgFormValidation']\">Form with ngForm</a></li>\n                </ul>\n                </nav>\n                <router-outlet></router-outlet>"
                    }),
                    router_1.RouteConfig([
                        { path: '/simpleform', name: 'SimpleForm', component: myformsimple_component_1.MyFormSimpleComponent },
                        { path: '/simplevalidation', name: 'SimpleValidation', component: simplevalidation_component_1.SimpleValidationComponent },
                        { path: '/specificvalidation', name: 'SpecificValidation', component: specificvalidation_component_1.SpecificValidationComponent },
                        { path: '/ngformvalidation', name: 'NgFormValidation', component: ngformvalidation_component_1.NgFormValidationComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map