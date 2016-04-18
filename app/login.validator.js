System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginValidator;
    return {
        setters:[],
        execute: function() {
            LoginValidator = (function () {
                function LoginValidator() {
                }
                //
                // Validation is ok: null
                // Validation fails: return {validationRule: value}
                LoginValidator.cannotContainInvalidCharacters = function (control) {
                    if (control.value.indexOf("-") >= 0) {
                        return { cannotContainHyphen: true };
                    }
                    return null;
                };
                return LoginValidator;
            }());
            exports_1("LoginValidator", LoginValidator);
        }
    }
});
//# sourceMappingURL=login.validator.js.map