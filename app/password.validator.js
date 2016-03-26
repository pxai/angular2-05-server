System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidator;
    return {
        setters:[],
        execute: function() {
            PasswordValidator = (function () {
                function PasswordValidator() {
                }
                PasswordValidator.shouldNotBeTypical = function (control) {
                    // We are using a Promise
                    // executor (resolve, reject) => void
                    // instead or sending a value, we use resolve
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "1234") {
                                resolve({ shouldNotBeTypical: true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 2000);
                    });
                };
                PasswordValidator.mustBeTheSame = function (control) {
                    console.log("See whhat happens");
                    console.log(control);
                    if (1 === 1) {
                        return null;
                    }
                    else {
                        return { passwordNotTheSame: true };
                    }
                };
                return PasswordValidator;
            }());
            exports_1("PasswordValidator", PasswordValidator);
        }
    }
});
//# sourceMappingURL=password.validator.js.map