import {Control} from "angular2/common";

export class LoginValidator {
  //
  // Validation is ok: null
  // Validation fails: return {validationRule: value}
  static cannotContainInvalidCharacters (control: Control) {
    if (control.value.indexOf("-") >= 0) {
      return { cannotContainHyphen: true };
    }
    return null;
  }
}
