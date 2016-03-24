System.register(["angular2/core", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, Rx_1;
    var PromiseSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            /**
             * Form samples
             * Using form builder results in cleaner
             */
            PromiseSampleComponent = (function () {
                function PromiseSampleComponent() {
                    this.title = "Simple form with Promises";
                    this.users = [{ id: 1, username: 'esnowden', email: 'ed@kgb.ru' },
                        { id: 2, username: 'jassange', email: 'julian@gob.pe' }];
                    console.log(new Rx_1.Observable());
                    var clicks = Rx_1.Observable.fromEvent($("#submit"), "click");
                    clicks.subscribe(function (data) {
                        console.log("Button clicked");
                    });
                    console.log("Constructor was called");
                    clicks.subscribe(function (data) { return console.log(data); });
                    var keydowns = Rx_1.Observable.fromEvent($("#login"), "keydown")
                        .map(function (e) { return e.target.value; });
                    keydowns.subscribe(function (data) { return console.log(data); });
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
                PromiseSampleComponent.prototype.cancelSubscription = function () {
                    console.log("Subscription canceled");
                    this.subscription.unsubscribe();
                    console.log($("#login").val());
                };
                /**
                * async call to server to check wether user exists
                */
                PromiseSampleComponent.prototype.checkLogin = function (login) {
                };
                PromiseSampleComponent = __decorate([
                    core_1.Component({
                        selector: "control-group",
                        templateUrl: "app/promisesample.template.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PromiseSampleComponent);
                return PromiseSampleComponent;
            }());
            exports_1("PromiseSampleComponent", PromiseSampleComponent);
        }
    }
});
//# sourceMappingURL=promisesample.component.js.map