System.register(["angular2/core", "angular2/common", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, common_1, Rx_1;
    var ObservableSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            // Optimal way to get just what we need:
            // import {Observable} from "rxjs/Rx";
            // import "rxjs/add/operator/filter";
            // import "rxjs/add/operator/debounceTime";
            /**
            * Using Observable. Observables let us to subscribe to a flow
            * of events or data
            */
            ObservableSampleComponent = (function () {
                function ObservableSampleComponent(formBuilder) {
                    this.title = "Simple form with Observable async query";
                    this.users = [{ id: 1, username: 'esnowden', email: 'ed@kgb.ru' },
                        { id: 2, username: 'jassange', email: 'julian@gob.pe' }];
                    this.form = formBuilder.group({
                        login: ["", common_1.Validators.required]
                    });
                    console.log(new Rx_1.Observable());
                    var clicks = Rx_1.Observable.fromEvent($("#submit"), "click");
                    clicks.subscribe(function (data) {
                        console.log("Button clicked");
                    });
                    var keyups = Rx_1.Observable.fromEvent($("#login"), "keyup")
                        .map(function (e) { return e.target.value; }) // map data to change it to objecto to string
                        .filter(function (text) { return text.length >= 3; }) // applies a filter
                        .debounce(1000) // apply some delay
                        .distinctUntilChanged() // don't do anything unless changes were made
                        .flatMap(function (searchTerm) {
                        //.map (searchTerm => {   // finally we call the server
                        var url = "http://localhost:3000/api/users";
                        // when the json response is ready, it will feed the observable
                        var promise = $.getJSON(url);
                        // We return an Observable
                        return Rx_1.Observable.fromPromise(promise);
                    });
                    // arrow expression o lamda function
                    this.subscription = keyups.subscribe(function (data) { return console.log(data); });
                    /*
                    var keyups = Observable.fromEvent($("#login"), "keyup");
                    // anonymous function mode
                    keyups.subscribe(function (data) {
                          console.log(data);
                      });
                      // arrow expression o lamda function
                      keyups.subscribe(data => console.log(data));
                      */
                }
                /**
                * cancel subscription to observable
                */
                ObservableSampleComponent.prototype.cancelSubscription = function () {
                    console.log("Subscription canceled");
                    this.subscription.unsubscribe();
                };
                /**
                * async call to server to check wether user exists
                */
                ObservableSampleComponent.prototype.checkLogin = function (login) {
                };
                ObservableSampleComponent.prototype.signup = function () {
                    if (this.form.find("login").value === "admin") {
                        this.form.find("login").setErrors({
                            loginExists: true
                        });
                    }
                    console.log("Sending form");
                    console.log(this.form.value);
                };
                ObservableSampleComponent = __decorate([
                    core_1.Component({
                        selector: "control-group",
                        templateUrl: "app/observablesample.template.html",
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ObservableSampleComponent);
                return ObservableSampleComponent;
            }());
            exports_1("ObservableSampleComponent", ObservableSampleComponent);
        }
    }
});
//# sourceMappingURL=observablesample.component.js.map