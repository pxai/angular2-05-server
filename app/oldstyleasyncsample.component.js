System.register(["angular2/core", "angular2/common", "./login.validator"], function(exports_1, context_1) {
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
    var core_1, common_1, login_validator_1;
    var OldStyleAsyncSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (login_validator_1_1) {
                login_validator_1 = login_validator_1_1;
            }],
        execute: function() {
            /**
             * Form samples
             * Using form builder results in cleaner
             */
            OldStyleAsyncSampleComponent = (function () {
                function OldStyleAsyncSampleComponent(formBuilder) {
                    this.title = "Simple form with OnSubmit Validation";
                    // Array with properties for each field:
                    // default value and validator function
                    this.form = formBuilder.group({
                        login: ["", common_1.Validators.compose([
                                common_1.Validators.required,
                                login_validator_1.LoginValidator.cannotContainInvalidCharacters
                            ])],
                        password: ["", common_1.Validators.required],
                        password2: ["", common_1.Validators.required]
                    });
                }
                OldStyleAsyncSampleComponent.prototype.signup = function () {
                    // For login with a server side check using a service
                    // var result = signUpService.checkLogin(this.form.value);
                    /*
                      if (result) {
                      this.form.find('login').setErrors({
                        loginExists: true;
                      });
                    }
                    */
                    if (this.form.find("login").value === "admin") {
                        this.form.find("login").setErrors({
                            loginExists: true
                        });
                    }
                    if (this.form.find("password").value !== this.form.find("password2").value)
                        this.form.find("password2").setErrors({
                            passwordsDoNotMatch: true
                        });
                    console.log("Sending form");
                    console.log(this.form.value);
                };
                OldStyleAsyncSampleComponent = __decorate([
                    core_1.Component({
                        selector: "control-group",
                        templateUrl: "app/oldstyleasyncsample.template.html",
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], OldStyleAsyncSampleComponent);
                return OldStyleAsyncSampleComponent;
            }());
            exports_1("OldStyleAsyncSampleComponent", OldStyleAsyncSampleComponent);
        }
    }
});
//# sourceMappingURL=oldstyleasyncsample.component.js.map