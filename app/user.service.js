System.register(["angular2/http", "rxjs/add/operator/map", "angular2/core"], function(exports_1, context_1) {
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
    var http_1, core_1;
    var UserService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
            * http gets injected through the constructor argument
            * don't forget to tell the injector in any component we use
            * using the providers..
            */
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                }
                // Could be : Observable <User[]>  to get intellisense
                UserService.prototype.getUsers = function () {
                    // we subscribe to an observable, when data is ready
                    // we push data to the component. this will be a consumer
                    // We expose only data using map operator, that must be imported
                    return this.http.get("http://localhost:3000/api/users/")
                        .map(function (result) { return result.json(); });
                };
                UserService.prototype.save = function (user) {
                    return this.http.post("http://localhost:3000/api/user/save", JSON.stringify(user))
                        .map(function (result) { return result.json(); });
                };
                UserService.prototype.update = function (user) {
                    this.http.put("http://localhost:3000/api/user/update", JSON.stringify(user))
                        .map(function (result) { return result.json(); });
                };
                UserService.prototype.delete = function (id) {
                    this.http.put("http://localhost:3000/api/user/delete/", "");
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map